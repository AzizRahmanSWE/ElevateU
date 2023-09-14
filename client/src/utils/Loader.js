import React from "react";
import { Stack } from "@mui/material";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      mt="70px"
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
      />
    </Stack>
  );
};

export default Loader;
