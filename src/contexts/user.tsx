"use client";

import React, { useState } from "react";

interface UserContextInterface {
  username: string;
  setUsername: (_u: string) => void;
}

interface UserProviderProps extends React.PropsWithChildren {
  user: string;
}

const UserContext = React.createContext<UserContextInterface>({
  username: "",
  setUsername: (_u: string) => {},
});

const UserProvider: React.FC<UserProviderProps> = ({ children, user }) => {
  const [username, setUsername] = useState<string>(user);

  const value: UserContextInterface = {
    username,
    setUsername: (u: string) => setUsername(u),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

export type { UserContextInterface };
