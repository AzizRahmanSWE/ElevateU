import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../../assets/images/NewLogo.png";

const Footer = () => (
  <Box mt="100px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="20px"
      pt="44px"
    >
      <a href="#top">
        <img src={Logo} alt="logo" style={{ width: "200px", height: "70px" }} />
      </a>
    </Stack>
    <Typography
      variant="h4"
      sx={{ fontSize: { lg: "15px", xs: "10px" } }}
      mt="20px"
      textAlign="center"
      pb="10px"
      color="#F2F2F2"
      fontWeight={200}
      mr="40px"
    >
      Designed by Jeremy Lee, Aziz Rahman, Tony Tran
    </Typography>
  </Box>
);

export default Footer;
