import React, { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [menuToggle, setMenuToggle] = useState(false);

  const handleUserPopup = () => {
    setMenuToggle(!menuToggle);
    setTimeout(() => {
      setMenuToggle(false);
    }, 2000);
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <Box position="relative">
          <IconButton onClick={handleUserPopup}>
            <PersonOutlinedIcon />
          </IconButton>
          {menuToggle ? (
            <Box
              width="300px"
              position="absolute"
              sx={{ top: "40px", right: "10px" }}
              backgroundColor={colors.primary[500]}
              border={`1px solid ${colors.primary[400]}`}
              borderRadius="4px"
              p="5px"
              zIndex="10"
            >
              <Typography variant="h3">Admin</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                repellat quasi voluptates dolor libero temporibus animi magni
                esse iure, repudiandae pariatur. Eum quibusdam laudantium, totam
                alias maiores illum rerum saepe.
              </Typography>
            </Box>
          ) : undefined}
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
