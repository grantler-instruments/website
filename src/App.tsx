import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./muiTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Optional: ensures consistent baseline CSS */}
      <div>coming soon...</div>
    </ThemeProvider>
  );
}

export default App;
