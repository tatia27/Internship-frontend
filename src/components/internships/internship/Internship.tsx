import "./internship.css";

function Internship() {
  return (
    <div className="container">
      <div className="intership">
        <div className="intership__title">
          <h4>UI/UX дизайнер</h4>
          <h5>Яндекс</h5>
        </div>
        <div className="intership__card-info">
          <div className="intership__card-info__item">
            <span>Оплачиваеамая</span>
          </div>
          <div className="intership__card-info__item">
            <span>Полный день</span>
          </div>
          <div className="intership__card-info__item">
            <span>В офисе</span>
          </div>
        </div>
        <div className="intership__time-salary">
          <div className="intership__time-salary__all">
            <p>Длительность</p>
            <span>3 месяца</span>
          </div>
          <div className="intership__time-salary__all">
            <p>Зарплата</p>
            <span>-</span>
          </div>
        </div>

        <div className="intership__skills">
          <span>Навыки</span>
          <ul>
            <li>Владение Figma;</li>
            <li>Базовые знания Photoshop и Illustrator;</li>
            <li>Наличие портфолио;</li>
          </ul>
        </div>

        <div className="intership__conditions">
          <span>Условия</span>
          <ul>
            <li>Студент очной формы обучения;</li>
            <li>Интерес к сфере UX-исследований;</li>
            <li>
              Понимание основ по качественным и количественным исследованиям;
            </li>
          </ul>
        </div>
        <button className="intership__button">Подать заявку</button>
      </div>
    </div>
  );
}

export default Internship;
