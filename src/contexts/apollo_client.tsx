'use client'

import { makeClient } from '@/libs/apollo_client_ssr'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support'
import type React from 'react'

const ApolloClientProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}

export default ApolloClientProvider