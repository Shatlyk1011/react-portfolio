import "./works.scss";
import { Link } from "react-router-dom";

//components
export default function Works() {
  return (
    <div className="works">
      <div className="container">
        <div className="description">
          <h1>Привет. Тут вы можете посмотреть на все мои работы.</h1>
          <p>
            Я решил разделить их на 2 категории. <span>Первая</span> категория
            ручные работы на 99.99% мои. <br /> Вторая категория работы
            сделанные во время прохожления разных курсов (ссылки прилагаются)
          </p>
        </div>
      </div>
      <Link to="/works/todo-list">work 1Todo List</Link>
    </div>
  );
}
