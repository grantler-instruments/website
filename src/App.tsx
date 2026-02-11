import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import theme from "./muiTheme";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import { HashRouter, Route, Routes } from "react-router";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Things from "./components/Things";
import Contact from "./components/Contact";
import WIPBanner from "./components/WorkInProgress";
import Thing from "./components/Thing";
import About from "./components/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Box
        width={"100vw"}
        minHeight={"100dvh"}
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/things">
                <Route index element={<Things/>} />
                <Route path=":id" element={<Thing />} />
              </Route>

              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </HashRouter>
        <WIPBanner />
      </Box>
    </ThemeProvider>
  );
}

export default App;
