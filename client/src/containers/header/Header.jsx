import React from "react";
import "./header.css";

import banner from "../../assets/images/Banner.png";

const Header = () => {
  return (
    <div className="elvU__header section__padding" id="home">
      <div className="elvU__header-content">
        <h1 className="gradient__text">
          Control, Strive <br />
          Elevate your Limit
        </h1>
        <button type="button">Get Started</button>
      </div>
      <div className="elvU__header-image">
        <img src={banner} />
      </div>
    </div>
  );
};

export default Header;
