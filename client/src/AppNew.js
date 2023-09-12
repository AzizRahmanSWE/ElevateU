import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { FooterNew, Header } from "./containers";
import { NavbarNew } from "./components";

const AppNew = () => {
  return (
    <div className="AppNew">
      <div className="gradient__bg">
        <NavbarNew />
        <Header />
      </div>
      <FooterNew />
    </div>
  );
};

export default AppNew;
