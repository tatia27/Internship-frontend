import { Carousel } from "primereact/carousel";
import { IInternship } from "../filter/filter/filter";
import Card from "../internships/card/card";
import "./favoriteCarousel.css";

type FavoriteProps = {
  favorites: IInternship[];
};

function FavoriteCarousel({ favorites }: FavoriteProps) {
  const itemTemplate = (item: IInternship) => {
    return <Card item={item} />;
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

export default FavoriteCarousel;
