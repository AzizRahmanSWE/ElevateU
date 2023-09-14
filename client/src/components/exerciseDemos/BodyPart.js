import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../../assets/icons/New_Icon.png";

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
        height: "250px",
        cursor: "pointer",
        gap: "45px",
        mt: "20px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "150px", height: "100px" }}
      />
      <Typography
        fontSize="25px"
        fontWeight="bold"
        color="#F2F2F2"
        textTransform="capitalize"
        onMouseOver={(e) => (
          (e.target.style.fontWeight = 1000), (e.target.style.color = "#5AFE73")
        )}
        onMouseOut={(e) => (
          (e.target.style.fontWeight = "bold"), (e.target.style.color = "#F2F2F2")
        )}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
