import { Link, useNavigate } from "react-router-dom";
import "./Ourmenu.css";

export default function Ourmenu() {
    const navigate = useNavigate();
const handleNavLinkClick = (route) => {
  navigate(route);
};
  return (
    <div className="menucontain">
      <ul className="gridlist ">
         <Link
            to="/CandiesTreats"
            onClick={() => handleNavLinkClick("/CandiesTreats")}
          >
        <li className="griditem candy">
         
            Candies & Treats
          
        </li>
        </Link>
         <Link
            to="/FruitsMore"
            onClick={() => handleNavLinkClick("/FruitsMore")}
          >
        <li className="griditem veg">Fruits, Veggies, & More</li>
        </Link>
      </ul>
    </div>
  );
}
