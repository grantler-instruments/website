import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      "@font-face": [
        {
          fontFamily: "Rajdhani",
          src: "url('/fonts/Rajdhani-Regular.ttf') format('truetype')",
          fontWeight: 400,
          fontStyle: "normal",
        },
        {
          fontFamily: "Rajdhani",
          src: "url('/fonts/Rajdhani-Bold.ttf') format('truetype')",
          fontWeight: 700,
          fontStyle: "normal",
        },
      ],
      body: {
        fontFamily: '"Rajdhani", "Helvetica", "Arial", sans-serif',
      },
    }}
  />
);

export default GlobalStyles;