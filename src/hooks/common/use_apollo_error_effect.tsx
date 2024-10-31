import type { ApolloError } from '@apollo/client'
import { useEffect } from 'react'

interface UserApolloEffectOptions {
    handleUnauthorized: boolean
    handleInternalServerError: boolean
}

const useApolloErrorEffect = (
    apolloError: ApolloError | undefined,
    options: UserApolloEffectOptions = {
        handleInternalServerError: true,
        handleUnauthorized: true
    },
) => {
    useEffect(() => {
        const { handleInternalServerError, handleUnauthorized } = options
        if (apolloError) {
            console.info('[useApolloErrorEffect] error', apolloError)
            if (handleUnauthorized && apolloError.graphQLErrors?.[0]?.extensions?.code === 'UNAUTHENTICATED') {
                alert('Unauthorized')
            } else if (handleInternalServerError) {
                alert(apolloError.message)
            }
        }
    }, [apolloError])
}

export default useApolloErrorEffect