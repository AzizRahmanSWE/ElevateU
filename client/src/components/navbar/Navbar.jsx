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
            width: "150px",
            height: "100px",
            margin: "20px 0 10px 15px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontFamily: "Open Sans",
            color: "#F2F2F2",
            borderBottom: "3px solid #FF2625",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "2px inset #CDCDCD")
          }
          onMouseOut={(e) => (e.target.style.borderBottom = "none")}
        >
          Home
        </Link>
        <Link
          to="/workout_preset"
          style={{
            textDecoration: "none",
            fontFamily: "Open Sans",
            color: "#F2F2F2",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "2px inset #CDCDCD")
          }
          onMouseOut={(e) => (e.target.style.borderBottom = "none")}
        >
          Workout Presets
        </Link>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            fontFamily: "Open Sans",
            color: "#F2F2F2",
          }}
          onMouseOver={(e) =>
            (e.target.style.borderBottom = "2px inset #CDCDCD")
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
