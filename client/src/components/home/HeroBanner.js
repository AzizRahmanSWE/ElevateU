import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, Grid, buttonBaseClasses } from "@mui/material";

import Banner from "../../assets/images/NewBanner.png";

const HeroBanner = () => {
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      direction="row"
      mt={2}
      mx={1}
      position="relative"
      p="20px"
    >
      <Grid item xs={12} lg={4} ml={7}>
        <Typography
          variant="h4"
          color="#F2F2F2"
          fontWeight={700}
          sx={{ fontSize: { lg: "60px", xs: "55px" } }}
          mb="23px"
        >
          Control, Strive <br />
          <span style={{ color: "#5AFE73" }}>Elevate</span> Your Limit
        </Typography>
        <a className="explore-button" href="#exercises">
          <Link
            sx={{
              marginTop: "200px",
              textDecoration: "none",
              textAlign: "center",
              textAlign: "center",
              border: "3px groove #5AFE73",
              background: "transparent",
              padding: "7px",
              textTransform: "none",
              borderRadius: "200px",
              fontSize: { lg: "15px", xs: "10px" },
            }}
            color="#F2F2F2"
            fontWeight={500}
            fontFamily="manrope"
            onMouseOver={(e) => (e.target.style.fontWeight = 1000)}
            onMouseOut={(e) => (e.target.style.fontWeight = 500)}
          >
            Explore & Elevate
          </Link>
        </a>
      </Grid>
      <Grid item xs={12} lg={7} mt={3}>
        <img
          src={Banner}
          alt="banner"
          className="banner-img"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
