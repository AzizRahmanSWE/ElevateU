import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise.card exercise-card"
      to={`/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FC93AD",
            fontSize: "17px",
            fontFamily: "Open Sans",
            fontWeight: 100,
            borderRadius: "30px",
            textTransform: "capitalize",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5AFE73")}
          onMouseOut={(e) => (e.target.style.background = "#FC93AD")}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#32D3D8",
            fontSize: "17px",
            fontFamily: "Open Sans",
            borderRadius: "30px",
            textTransform: "capitalize",
          }}
          onMouseOver={(e) => (e.target.style.background = "#5AFE73")}
          onMouseOut={(e) => (e.target.style.background = "#32D3D8")}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight={700}
        sx={{
          fontSize: { lg: "15px", xs: "15px" },
        }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
        fontFamily="Open Sans"
        onMouseOver={(e) => (
          (e.target.style.fontWeight = 1000), (e.target.style.color = "#5AFE73")
        )}
        onMouseOut={(e) => (
          (e.target.style.fontWeight = "bold"), (e.target.style.color = "Black")
        )}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
