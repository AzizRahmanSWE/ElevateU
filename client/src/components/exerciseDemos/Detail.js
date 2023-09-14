import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  // object destructuring. allow for variables to be referenced by name.
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{ marginTop: "100px", borderRadius: "10px" }}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          color="#5AFE73"
          fontWeight={800}
          textTransform="capitalize"
        >
          {name}
        </Typography>

        <Typography variant="h6" color="#FFF" fontSize="24px">
          Exercises Keep you Strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> Is one of
          the best exercise to target your {target}. It will help you improve
          your overall energy levels.
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "60px", height: "60px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              variant="h5"
              color="#FFF"
              fontSize="30px"
              fontFamily="manrope"
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
