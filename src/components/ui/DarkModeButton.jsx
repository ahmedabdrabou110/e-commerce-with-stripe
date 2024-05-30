import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../context/theme";
import { useTheme } from "@emotion/react";

const DarkModeButton = () => {
  const colorMode = useContext(ColorModeContext);
  // 2 b 3345 // d23f57
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
        </IconButton>
      )}
    </div>
  );
};

export default DarkModeButton;
