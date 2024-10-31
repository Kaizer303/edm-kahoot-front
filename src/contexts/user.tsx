'use client'

import React from 'react'

interface UserContextInterface {
  username: string
}

interface UserProviderProps extends React.PropsWithChildren {
  user: string
}

const UserContext = React.createContext<UserContextInterface>({
  username: 'Guest',
})

const UserProvider: React.FC<UserProviderProps> = ({ children, user }) => {
  const value: UserContextInterface = {
    username: user,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export {
  UserContext,
  UserProvider,
}

export type {
  UserContextInterface,
}