import "./category1.scss";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as Market } from "../../assets/icons/market.svg";
//components
import Card from "../Card/card";

const imagesUrl = [
  //img 1
  "https://images.unsplash.com/photo-1572402123736-c79526db405a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

  //img2
  "https://images.unsplash.com/photo-1533115149875-0a1c8612f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //img3
  "https://img.freepik.com/free-vector/calculating-costs_24877-49122.jpg?w=826&t=st=1675368071~exp=1675368671~hmac=ac7386f17bf09fff61b3746392c139692af16e53cfa705dd761f52f221d801e9",
];

export default function cards({ order }) {
  return (
    <div>
      <div className="cards">
        <h2>- {order} категория</h2>
        <div className="grid">
          <Card
            title="SNG market"
            imgUrl={imagesUrl[0]}
            tools={["VUE", "Firebase"]}
            icon={<Market />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/sng-market-v2",
              "https://sng-market.netlify.app/",
            ]}
          >
            Один из немногих проектов из категории "Масштабные". <br /> СНГ
            Рынок - место для закупки товаров из стран СНГ. На этой работе я
            постарался выложить все свои способности. Подробнее о функционале вы
            можете прочитать на GitHub.
          </Card>
          <Card
            title="Todo list"
            imgUrl={imagesUrl[1]}
            tools={["React", "DOM", "app"]}
            icon={<Calendar />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/todo-app-no-backend",
              "works/todo-list",
            ]}
          >
            Todo list без backend. <br /> Функции: удалять, добавлять, отмечать
            выполненные.
          </Card>

          <Card
            title="Calculator"
            imgUrl={imagesUrl[2]}
            tools={["Vue", "Options API"]}
            icon={<Calculator />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/calculator",
              "https://shat-calc.netlify.app/",
            ]}
          >
            Калькулятор с возможностями вычеслять проценты, умножать, делить,
            прибавлять, убавлять
          </Card>
        </div>
      </div>
    </div>
  );
}
