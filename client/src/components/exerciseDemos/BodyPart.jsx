import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #5AFE73" : "",
        backgroundColor: "transparent",
        borderBottomLeftRadius: "20px",
        width: "250px",
        height: "200px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "150px", height: "40px" }}
      />
      <Typography
        fontSize="25px"
        fontFamily="Open Sans"
        fontWeight="bold"
        color="#F2F2F2"
        textTransform="capitalize"
        onMouseOver={(e) => (
          (e.target.style.fontWeight = 1000), (e.target.style.color = "#5AFE73")
        )}
        onMouseOut={(e) => (
          (e.target.style.fontWeight = 500), (e.target.style.color = "#F2F2F2")
        )}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
