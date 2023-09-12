import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

const Footer = () => (
  <Box mt="100px" bgcolor="#010314">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="20px"
      pt="44px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "100px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      color="#F2F2F2"
      fontWeight={700}
      fontFamily="Open Sans"
    >
      Contact Us
    </Typography>
  </Box>
);

export default Footer;
