import "./card.scss";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Site } from "../../assets/icons/site.svg";

//components
import Btn from "../btn/btn";

export default function card({
  title,
  imgUrl,
  tools,
  icon,
  children,
  githubAndSiteUrls,
}) {
  return (
    <div className="card">
      <div className="wrap">
        <img src={imgUrl} alt="" className="img" />
        <div className="tools">
          {tools &&
            tools.map((tool) => (
              <div className="tool" key={tool}>
                {tool}
              </div>
            ))}
        </div>
        <div className="title">
          <span>{icon}</span>
          {title}
        </div>
        <div className="description">{children}</div>
        <div className="btns">
          <Btn
            title="Github"
            logo={<Github />}
            padding="padding"
            url={githubAndSiteUrls[0]}
          />
          <Btn title="run " logo={<Site />} url={githubAndSiteUrls[1]} />
        </div>
      </div>
    </div>
  );
}
