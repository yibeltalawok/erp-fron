import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "../theme/themePalettes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeToggleProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(
    localStorage.getItem("darkMode", prefersDarkMode)
  );

  useEffect(() => {
    setMode(
      prefersDarkMode
        ? localStorage.getItem("darkMode", "dark")
        : localStorage.getItem("darkMode", "light")
    );
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorModeContext);
