import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../../assets/images/NewLogo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "200px",
            height: "70px",
            marginTop: "25px",
            marginLeft: "100px",
            marginRight: "15px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#F2F2F2",
          }}
          onMouseOver={(e) => (
            (e.target.style.fontWeight = 1000),
            (e.target.style.color = "#5AFE73"),
            (e.target.style.borderBottom = "3px solid #CDCDCD")
          )}
          onMouseOut={(e) => (
            (e.target.style.fontWeight = 500),
            (e.target.style.color = "#F2F2F2"),
            (e.target.style.borderBottom = "none")
          )}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#F2F2F2",
          }}
          onMouseOver={(e) => (
            (e.target.style.fontWeight = 1000),
            (e.target.style.color = "#5AFE73"),
            (e.target.style.borderBottom = "3px solid #CDCDCD")
          )}
          onMouseOut={(e) => (
            (e.target.style.fontWeight = 500),
            (e.target.style.color = "#F2F2F2"),
            (e.target.style.borderBottom = "none")
          )}
        >
          Exercises
        </a>
        <Link
          to="/workout_presets"
          style={{
            textDecoration: "none",
            color: "#F2F2F2",
          }}
          onMouseOver={(e) => (
            (e.target.style.fontWeight = 1000),
            (e.target.style.color = "#5AFE73"),
            (e.target.style.borderBottom = "3px solid #CDCDCD")
          )}
          onMouseOut={(e) => (
            (e.target.style.fontWeight = 500),
            (e.target.style.color = "#F2F2F2"),
            (e.target.style.borderBottom = "none")
          )}
        >
          Workout Presets
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
