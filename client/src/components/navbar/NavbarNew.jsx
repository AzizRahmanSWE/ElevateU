import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";
import Logo from "../../assets/images/NewLogo.png";

const NavbarNew = () => {
  return (
    <div className="elvU__navbar">
      <div className="elvU__navbar-links">
        <div className="elvU__navbar-links_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="elvU__navbar-links_container">
          <p>
            <a
              herf="home"
              onMouseOver={(e) => (
                (e.target.style.fontWeight = 1000),
                (e.target.style.color = "#5AFE73")
              )}
              onMouseOut={(e) => (
                (e.target.style.fontWeight = 500),
                (e.target.style.color = "#FFF")
              )}
            >
              Home
            </a>
          </p>
          <p>
            <a
              herf="workout_preset"
              onMouseOver={(e) => (
                (e.target.style.fontWeight = 1000),
                (e.target.style.color = "#5AFE73")
              )}
              onMouseOut={(e) => (
                (e.target.style.fontWeight = 500),
                (e.target.style.color = "#FFF")
              )}
            >
              Workout Preset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
