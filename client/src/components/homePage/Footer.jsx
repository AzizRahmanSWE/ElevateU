import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="50px" bgcolor="lightpink">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: "110px", height: "100px", margin: "" }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="10px" textAlign="center" pb="40px">Contact Us</Typography>
  </Box>
  )
};

export default Footer;
