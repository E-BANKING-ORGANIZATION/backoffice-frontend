import { createContext, PropsWithChildren, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { UserDto } from "../type/User";
type UserContextType = {
  user: UserDto;
  updateUser: (user: UserDto) => void;
};

type PropsType = PropsWithChildren<{
  value?: UserContextType;
}>;

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: PropsType) => {
  const [user, setUser] = useState<UserDto>({} as UserDto);
  const updateUser = (userr: UserDto) => {
    setUser(userr);
  };
  return (
    <UserContext.Provider
      value={{
        user: user,
        updateUser: updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
