import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colourModeContext } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const topBar = () => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);
  const colourMode = useContext(colourModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroudColour={colours.primary[400]}></Box>
    </Box>
  );
};

export default topBar;
