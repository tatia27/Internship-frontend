import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface IFavorites {
  favorites: string[] | [];
  setFavorites?: Dispatch<SetStateAction<string[]>>;
  like: boolean;
  setLike?: Dispatch<SetStateAction<boolean>>;
}

interface IFavoritesContextProviderProps {
  children: ReactNode;
}
export const FavoritesContext = createContext<IFavorites>({
  favorites: [],
  like: false,
});

export function FavoritesContextProvider({
  children,
}: IFavoritesContextProviderProps) {
  const [favorites, setFavorites] = useState<string[] | []>([]);
  const [like, setLike] = useState<boolean>(false);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        like,
        setLike,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
