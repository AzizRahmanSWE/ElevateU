import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, Grid } from "@mui/material";

import Banner from "../../assets/images/Banner.png";

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
          //underline="none"
          component={RouterLink}
          to="/login"
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
          fontWeight={100}
          fontFamily="Open Sans"
          onMouseOver={(e) => (e.target.style.fontWeight = 1000)}
          onMouseOut={(e) => (e.target.style.fontWeight = 100)}
        >
          Sign Up
        </Link>
      </Grid>
      <Grid item xs={12} lg={8} mt={3}>
        <img
          src={Banner}
          alt="banner"
          className="banner-img"
          style={{ width: "99%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
