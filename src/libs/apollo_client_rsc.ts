import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'
import configs from '@/configs'

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: `${configs.API_GATEWAY_URL}/v1/graphql`,
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
})