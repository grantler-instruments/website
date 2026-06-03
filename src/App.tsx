import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router";
import Header from "./Header";
import theme from "./muiTheme";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Things from "./components/Things";
import Contact from "./components/Contact";
import Thing from "./components/Thing";
import About from "./components/About";
import Events from "./components/Events";
import Event from "./components/Event";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <HashRouter>
        <Box
          width={"100vw"}
          minHeight={"100dvh"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Header />
          <Box
            flex={1}
            width={"100%"}
            maxWidth={"lg"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            gap={4}
            alignItems={"center"}
            justifyContent={"center"}
            minWidth={0}
            overflow={"auto"}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/things">
                <Route index element={<Things />} />
                <Route path=":id" element={<Thing />} />
              </Route>

              <Route path="/events">
                <Route index element={<Events />} />
                <Route path=":id" element={<Event />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
