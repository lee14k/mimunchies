import "./Home.css";
import "@fontsource/pacifico";
import "@fontsource/roboto";
import Call from "./Call";
import { Link, useNavigate } from "react-router-dom";
import Peachy from "./Peachy";

export default function Home() {
    const navigate = useNavigate();
  const handleNavLinkClick = (route) => {
    navigate(route);
  };
  return (
    <div>
      <div className="homewrapper">
        <img className="logo" src="./mifinlogo.png" alt="" />

        <h1 className="treats">Freeze Dried Treats</h1>
        <div className="buttoncontainer">
          <button
            className="orderbutton"
            onClick={() => handleNavLinkClick("/Store")}
          >
            Order your Treats
          </button>
        </div>
      </div>
      <div className="container">
        <Call />
      </div>
     
      <Peachy />
    </div>
  );
}
