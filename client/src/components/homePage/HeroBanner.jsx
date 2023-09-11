import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, Grid } from "@mui/material";

import Banner from "../../assets/images/Banner_1.png";

const HeroBanner = () => {
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      direction="row"
      mt={2}
      mx={1}
      /*sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}*/
      position="relative"
      p="20px"
    >
      <Grid item xs={12} lg={4}>
        <Typography
          variant="h4"
          color="#F2F2F2"
          fontWeight={700}
          fontFamily="Open Sans"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Control, Strive <br />
          <span style={{ color: "#5AFE73" }}>Elavate</span> Your Limit
        </Typography>
        <Link
          underline="none"
          component={RouterLink}
          to="/login"
          sx={{
            marginTop: "25px",
            textDecoration: "none",
            textAlign: "center",
            width: "160px",
            height: "40px",
            textAlign: "center",
            border: "2px solid #5AFE73",
            background: "transparent",
            padding: "2px",
            textTransform: "none",
            borderRadius: "20px",
            fontSize: { lg: "15px", xs: "10px" },
          }}
          color="#F2F2F2"
          fontWeight={700}
          fontFamily="Open Sans"
        >
          Sign Up
        </Link>
      </Grid>
      <Grid item xs={12} lg={8}>
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
