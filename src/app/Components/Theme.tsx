import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
      commerce: {
          blue: string;
        white: string;
        grey: string;
      };
    }
    // allow configuration using `createTheme()`
    interface ThemeOptions {
      commerce?: {
          blue?: string;
        white?: string;
        grey?: string;
      };
    }
  }
  
  
  

export const Theme = createTheme({
    commerce: {
        blue: "#3A59D1",
    white: "#FFFFFF",
        grey:"#00000021",
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    }
})