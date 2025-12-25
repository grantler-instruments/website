import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import theme from "./muiTheme";
import GlobalStyles from "./GlobalStyles";
import Logo from "./Logo";
import Footer from "./Footer";
import { HashRouter } from "react-router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Box
        width={"100vw"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
      >
        <HashRouter>
          <Header />
          <Box
            flex={1}
            maxWidth={"lg"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Logo height={200} />
          </Box>
          <Footer />
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
