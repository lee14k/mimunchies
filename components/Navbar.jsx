import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Check initial window width on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleHamburger = () => {
    setDropdown(false); // Close the dropdown when toggling the hamburger
    setShowMobile(!showMobile);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  const handleNavLinkClick = (route) => {
    navigate(route);
    setDropdown(false);
    setShowMobile(false);
  };

  return (
    <div className="navbar">
      {typeof window !== "undefined" && isMobile && (
        <div
          className={`hamburger-icon ${showMobile && !dropdown ? "open" : ""}`}
          onClick={toggleHamburger}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
      {(showMobile || !isMobile || dropdown) && (
        <ul className={`nav ${dropdown ? "open" : ""}`}>
          <li className="nav-item">
            <Link to="/Ourmenu" onClick={() => handleNavLinkClick("/Ourmenu")}>
              Our Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" onClick={() => handleNavLinkClick("/")}>
              <img className="navlogo" src="mifinlogo.png"></img>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" onClick={() => handleNavLinkClick("/Contact")}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
