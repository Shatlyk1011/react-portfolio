import "./cards.scss";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
//components
import Card from "../Card/card";

const imagesUrl = [
  //img 1
  "https://images.unsplash.com/photo-1533115149875-0a1c8612f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  //img2
  "https://images.unsplash.com/photo-1533115149875-0a1c8612f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //img3
  "https://images.unsplash.com/photo-1533115149875-0a1c8612f726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export default function cards({ order }) {
  return (
    <div>
      <div className="cards">
        <h2>- {order} категория</h2>
        <div className="grid">
          <Card
            imgUrl={imagesUrl[0]}
            tools={["tool1", "tool2", "tool3"]}
            icon={<Calendar />}
            githubAndSiteUrls={["https://github.com", "https://site.com"]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non
            dolores officiis totam, nam ipsam? Ut aperiam dicta quam, voluptatem
            fugit quaerat unde delectus quas hic impedit mollitia molestiae
            eaque?
          </Card>

          <Card
            imgUrl={imagesUrl[1]}
            tools={["tool1", "tool2", "tool3"]}
            icon={<Calendar />}
            githubAndSiteUrls={["https://github.com", "https://site.com"]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non
            dolores officiis totam, nam ipsam? Ut aperiam dicta quam, voluptatem
            fugit quaerat unde delectus quas hic impedit mollitia molestiae
            eaque?
          </Card>

          <Card
            imgUrl={imagesUrl[2]}
            tools={["tool1", "tool2", "tool3"]}
            icon={<Calendar />}
            githubAndSiteUrls={["https://github.com", "https://site.com"]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non
            dolores officiis totam, nam ipsam? Ut aperiam dicta quam, voluptatem
            fugit quaerat unde delectus quas hic impedit mollitia molestiae
            eaque?
          </Card>
        </div>
      </div>
    </div>
  );
}
