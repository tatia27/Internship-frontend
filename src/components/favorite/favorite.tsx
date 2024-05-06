import left from "./../../assets/icons/left.svg";
import right from "./../../assets/icons/right.svg";
import Card from "../internships/card/card";
import { Carousel } from "primereact/carousel";
import "./favorite.css";

type FavoriteProps = {
  favorites: string[];
};

function Favorite({ favorites }: FavoriteProps) {
  return (
    <div className="favorite__interns">
      <h3 className="user-profiles__favorite-internhip">
        Избранные стажировки
      </h3>
      <div className="favorite__interns__card">
        {/* <Carousel
          value={favorites}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        > */}
        {favorites.map((item) => {
          // return <Card key={item} id={item} />;
          return <Card key={item} id={item} />;
        })}
        {/* </Carousel> */}
      </div>
      <div className="favorite__interns__more">
        <div className="favorite__interns__more__item">
          <img src={left} alt="Стрелка влево"></img>
        </div>
        <div className="favorite__interns__more__item">
          <img src={right} alt="Стрелка вправо"></img>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
