import { Link } from "react-router-dom";
import "./hero.scss";
import Btn from "../btn/btn";

//components

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="wrap">
          <h1 className="title">Привет, Я Веб разработчик</h1>
          <h2 className="subtitle">
            Меня зовут <span> Шатлык </span> и тут мои работы
          </h2>
          <p className="text">
            Немножко о себе. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Maiores laborum facilis quam libero ex, magni quia error harum
            id eveniet.
          </p>
          <div className="btns">
            <Link className="btn btn--1" to="/works">
              <span>Перейти к моим работам</span>
            </Link>
            <Btn title="Посмотреть CV" />
            {/* <a href="/" className="btn btn--2">
              Посмотреть CV
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
