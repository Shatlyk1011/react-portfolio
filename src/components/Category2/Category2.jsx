import "./category2.scss";
import { ReactComponent as Airplane } from "../../assets/icons/air.svg";
import { ReactComponent as Pizza } from "../../assets/icons/pizza.svg";
import { ReactComponent as Dice } from "../../assets/icons/dice.svg";
//components
import Card from "../Card/card";

const imagesUrl = [
  //img 1
  "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",

  //img2
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  //img3
  "https://images.unsplash.com/photo-1655720406770-12ea329b5b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
];

export default function cards({ order }) {
  return (
    <div>
      <div className="cards">
        <h2>- {order} категория</h2>
        <div className="grid">
          <Card
            title="Outdoors"
            imgUrl={imagesUrl[0]}
            tools={["CSS", "SASS", "BEM"]}
            icon={<Airplane />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/natours",
              "https://outdoors-shatlyk.netlify.app",
            ]}
          >
            Landing page построен при прохождении курса по{" "}
            <a
              target="_blank"
              href="https://www.udemy.com/course/advanced-css-and-sass/"
            >
              продвинутому css{" "}
            </a>
          </Card>
          <Card
            title="Omnifood"
            imgUrl={imagesUrl[1]}
            tools={["HTML5", "CSS", "Web Design"]}
            icon={<Pizza />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/",
              "https://omnifood-shatlyk.netlify.app",
            ]}
          >
            Omnifood - full responsive landing page построенный при прохождении{" "}
            <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">
              курса по HTML/CSS
            </a>
          </Card>

          <Card
            title="Parallax page"
            imgUrl={imagesUrl[2]}
            tools={["Tailwind", "CSS"]}
            icon={<Dice />}
            githubAndSiteUrls={[
              "https://github.com/Shatlyk1011/parallax-landing-page/",
              "https://parallax-lp.netlify.app/",
            ]}
          >
            Простинькая parallax страница + JS
          </Card>
        </div>
      </div>
    </div>
  );
}
