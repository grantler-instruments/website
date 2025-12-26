import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      "@font-face": [
        {
          fontFamily: "Rajdhani",
          src: "url('/fonts/Rajdhani/Rajdhani-Regular.ttf') format('truetype')",
          fontWeight: 400,
          fontStyle: "normal",
          fontDisplay: "swap",
        },
        {
          fontFamily: "Rajdhani",
          src: "url('/fonts/Rajdhani/Rajdhani-Bold.ttf') format('truetype')",
          fontWeight: 700,
          fontStyle: "normal",
          fontDisplay: "swap",
        },
      ],
      body: {
        fontFamily: '"Rajdhani", "Helvetica", "Arial", sans-serif',
      },
    }}
  />
);

export default GlobalStyles;
