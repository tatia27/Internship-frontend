import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IFavorites {
  favorites: string[];
  setFavorites?: Dispatch<SetStateAction<string[]>>;
}

interface IFavoritesContextProviderProps {
  children: ReactNode;
}
export const FavoritesContext = createContext<IFavorites>({ favorites: [] });

export function FavoritesContextProvider({
  children,
}: IFavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

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
