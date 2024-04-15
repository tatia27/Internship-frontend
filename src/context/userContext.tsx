import axios from "axios";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type User = {
  role: string;
  name: string;
};

interface IContext {
  isAuth: Boolean;
  setIsAuth?: Dispatch<SetStateAction<boolean>>;
  user?: User | undefined;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
}

interface IUserContextProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<IContext>({ isAuth: false });

export function UserConternProvider({ children }: IUserContextProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();
  // useEffect(() => {
  //   if (!user) {
  //     axios.get("http://localhost:8000/v1/auth/profile").then(({ data }) => {
  //       setUser(data);
  //     });
  //   }
  // }, [user]);
  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
