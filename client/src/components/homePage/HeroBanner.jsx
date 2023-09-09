import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Banner1 from "../../assets/images/Banner1.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="10px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mb="23px"
        mt="30px"
        sx={{ fontSize: { lg: "35px", xs: "30px" } }}
      >
        Take Control Of Your Body <br />
        Elevate Your Limit
      </Typography>
      {/* change the button href to "register" once registeration page is done */}
      <Button variant="contained" href="login">
        Sign Up
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={Banner1}
        alt="banner1"
        className="banner-img"
        style={{ width: "60%", height: "60%", margin: "0 10px 0px 0" }}
      />
    </Box>
  );
};

export default HeroBanner;
