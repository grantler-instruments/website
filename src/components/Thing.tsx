import { Typography } from "@mui/material";
import { useParams } from "react-router";
import B8C from "./things/B8C";
import Enomik from "./things/Enomik";
import Turntangilism from "./things/Turntangilism";
import Deemex from "./things/Deemex";


const Thing = () => {
  const { id } = useParams();

  return (
    <Typography variant="h2">
      {id === "enomik" && <Enomik />}
      {id === "turntangilism" && <Turntangilism />}
      {id === "b8c" && <B8C />}
      {id === "deemex" && <Deemex />}
    </Typography>
  );
};

export default Thing;
