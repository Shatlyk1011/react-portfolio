import "./works.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as DoubleCheck } from "../../assets/icons/double-check.svg";

//components
import Cards from "../../components/Cards/Cards";

//components
export default function Works() {
  return (
    <div className="works">
      <div className="container">
        <div className="description">
          <h1>Привет. Тут вы можете посмотреть на все мои работы.</h1>
          <p>
            Я решил разделить их на 2 категории: <br /> <DoubleCheck />{" "}
            <span>Первая</span> категория ручные работы на 99.99% мои. <br />
            <Check /> <span>Вторая</span> категория работы сделанные во время
            прохождения курсов (ссылки прилагаются)
          </p>
        </div>

        <Cards order="Первая" />

        {/* <Link to="/works/todo-list">work 1Todo List</Link> */}
      </div>
    </div>
  );
}
