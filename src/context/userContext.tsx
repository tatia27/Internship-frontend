import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type User = {
  role: string;
  id: string;
};

interface IContext {
  user?: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
}

interface IUserContextProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<IContext>({});

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
