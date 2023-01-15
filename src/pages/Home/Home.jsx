import "./home.scss";
import { Outlet } from "react-router-dom";

//components
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="hero">
      <Hero />
      <Outlet />
    </div>
  );
}
