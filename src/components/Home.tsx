import { Box } from "@mui/material";
import type { MetaFunction } from "react-router";
import Logo from "../Logo";

export const meta: MetaFunction = () => [{ title: "Grantler Instruments" }];

const Home = () => {
  return (
    <Box>
      <Logo height={200} />
    </Box>
  );
};

export default Home;
