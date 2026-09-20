import { Meta, Links, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import "./index.css";
import theme from "./muiTheme";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo_v1.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
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
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
