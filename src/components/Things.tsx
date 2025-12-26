import { Box, Typography } from "@mui/material";
import Deemex from "./things/Deemex";
import Enomik from "./things/Enomik";
import B8C from "./things/B8C";
import Turntangilism from "./things/Turntangilism";

const Things = () => {
  return <Box>
    <Typography variant="h1">Things</Typography>
    <Enomik />
    <Turntangilism />
    <B8C />
    <Deemex />
  </Box>;
};

export default Things;
