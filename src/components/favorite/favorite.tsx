import left from "./../../assets/icons/left.svg";
import right from "./../../assets/icons/right.svg";
import Card from "../internships/card/card";
import "./favorite.css";

type FavoriteProps = {
  favorites: string[];
};

function Favorite({ favorites }: FavoriteProps) {
  console.log(favorites);
  return (
    <div className="favorite__interns">
      <h3 className="user-profiles__favorite-internhip">
        Избранные стажировки
      </h3>
      <div className="favorite__interns__card">
        {/* {favorites.map((item) => {
          return <Card key={item._id} />;
        })} */}
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
