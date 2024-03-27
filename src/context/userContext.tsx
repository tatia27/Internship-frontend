import axios from "axios";
import { createContext, useState, useEffect, Children, ReactNode } from "react";

// export const UserContext = createContext({});
// interface UserContextProviderProps {
//   children: ReactNode;
// }

// type UserI = {
//   name: string;
// } | null;
// export function UserConternProvider({ children }: UserContextProviderProps) {
//   const [user, setUser] = useState<UserI>(null);

//   useEffect(() => {
//     if (!user) {
//       axios.get("http://localhost:8000/v1/auth/profile").then(({ data }) => {
//         setUser(data);
//       });
//     }
//   }, [user]);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
