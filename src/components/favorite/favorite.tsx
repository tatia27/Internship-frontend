import { Carousel } from "primereact/carousel";
import Card from "../internships/card/card";
import "./favorite.css";

type FavoriteProps = {
  favorites: string[];
};

function Favorite({ favorites }: FavoriteProps) {
  const itemTemplate = (item: string) => {
    return <Card id={item} />;
  };

  return (
    <div className="favorite-internships">
      <h3 className="favorite-internships__title">Избранные стажировки</h3>
      <Carousel
        value={favorites}
        numVisible={2}
        numScroll={1}
        itemTemplate={itemTemplate}
      ></Carousel>
    </div>
  );
}

export default Favorite;
