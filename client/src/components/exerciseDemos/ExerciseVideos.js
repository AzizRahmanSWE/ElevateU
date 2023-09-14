import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "../../utils/Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  //if (!exerciseVideos.length) return <Loader />;
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#FFF"
        mb="33px"
      >
        Watch&nbsp;
        <span style={{ color: "#5AFE73", textTransform: "capitalize" }}>
          {name}
        </span>
        &nbsp;Related Videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ marginTop: "15px", borderRadius: "10px" }}
            />
            <Box>
              <Typography
                variant="h5"
                color="#FFF"
                fontSize="23px"
                fontWeight={400}
              >
                {item.video.title}
              </Typography>
              <Typography
                variant="h6"
                color="#FFF"
                fontSize="16px"
                fontWeight={400}
                sx={{ mt: "3px" }}
              >
                - {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
