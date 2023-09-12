import React from "react";
import { Box, Grid } from "@mui/material";

import Footer from "../bars/Footer";
import LongerBanner from "../../assets/images/longerBanner.png";

const WorkoutPresetMain = () => {
  return (
    <Box>
      <Grid item xs={12} lg={2} mt={3}>
        <img
          src={LongerBanner}
          alt="LongerBanner"
          className="banner-img"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} lg={2} mt={3}>
        <img
          src={LongerBanner}
          alt="LongerBanner"
          className="banner-img"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} lg={2} mt={3}>
        <img
          src={LongerBanner}
          alt="LongerBanner"
          className="banner-img"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Footer />
    </Box>
  );
};

export default WorkoutPresetMain;
