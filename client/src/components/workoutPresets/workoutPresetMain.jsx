import React from "react";
import { Box, Grid } from "@mui/material";

import Navbar from "../navbar/Navbar";
import HeaderBar from "./headerBar";
import Footer from "../footer/Footer";
import LongerBanner from "../../assets/images/longerBanner.png";

const WorkoutPresetMain = () => {
  return (
    <Box>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <HeaderBar />
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default WorkoutPresetMain;
