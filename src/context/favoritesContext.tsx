import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { IInternship } from "../components/filter/filter/filter";

interface IFavorites {
  favorites: IInternship[];
  setFavorites: Dispatch<SetStateAction<IInternship[]>>;
}

interface IFavoritesContextProviderProps {
  children: ReactNode;
}
export const FavoritesContext = createContext<IFavorites>({
  favorites: [],
  setFavorites: () => {},
});

export function FavoritesContextProvider({
  children,
}: IFavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<IInternship[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
