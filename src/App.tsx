import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Rajdhani, Roboto, Arial, sans-serif", // Set your custom font here
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Optional: ensures consistent baseline CSS */}
      <div>coming soon...</div>
    </ThemeProvider>
  );
}

export default App;
