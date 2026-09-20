import { Box } from "@mui/material";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "404 · Grantler Instruments" }];

const NotFound = () => {
  return <Box>404 - Not Found</Box>;
};

export default NotFound;
