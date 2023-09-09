import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "120px", height: "120px", margin: "0 10px 0px 0" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "none",
            transition: "border-bottom",
            paddingBottom: "2px",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "5px solid #FF2625")
          }
          onMouseOut={(e) => (e.target.style.borderBottom = "none")}
        >
          Home
        </Link>
        <Link
          to="/workoutPresets"
          href="exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "none",
            transition: "border-bottom",
            paddingBottom: "2px",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "5px solid #FF2625")
          }
          onMouseOut={(e) => (e.target.style.borderBottom = "none")}
        >
          Workout Presets
        </Link>

        <Link
          to="/login"
          href="login"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "none",
            transition: "border-bottom",
            paddingBottom: "2px",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "5px solid #FF2625")
          }
          onMouseOut={(e) => (e.target.style.borderBottom = "none")}
        >
          Log In
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
