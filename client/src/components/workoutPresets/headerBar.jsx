import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import Logo from "../../assets/images/NewLogo.png";

const HeaderBar = () => (
  <Box mt="100px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="20px"
      pt="15px"
    ></Stack>
    <Typography
      variant="h4"
      sx={{ fontSize: { lg: "15px", xs: "10px" } }}
      mt="20px"
      textAlign="center"
      pb="10px"
      color="#F2F2F2"
      fontWeight={200}
      fontFamily="Open Sans"
    >
      Designed by Jeremy Lee, Aziz Rahman, Tony Tran
    </Typography>
  </Box>
);

export default HeaderBar;
