'use client'

import {
  HttpLink,
  type NormalizedCacheObject,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import configs from '@/configs'
import { ApolloClient, InMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support'

let apolloClient: ApolloClient<NormalizedCacheObject>

const createApolloClient = () => {
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

  apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  })
}

const getApolloClient = () => {
  if (!apolloClient) {
    createApolloClient()
  }
  return apolloClient
}


const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${configs.API_GATEWAY_URL}/v1/graphql`,
    fetchOptions: { cache: 'no-store' },
  })

  const link = typeof window === 'undefined'
    ? ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink,
    ])
    : httpLink

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link,
  })
}

export {
  getApolloClient,
  makeClient,
}