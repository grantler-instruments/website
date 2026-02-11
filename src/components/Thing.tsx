import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import B8C from "./things/B8C";
import Enomik from "./things/Enomik";
import Turntangilism from "./things/Turntangilism";
import Deemex from "./things/Deemex";
import BackButton from "./BackButton";
import EspNowMidi from "./things/EspNowMidi";
import BYODMCSE from "./things/BYODMCSE";

const Thing = () => {
  const { id } = useParams();
  let title;

  switch (id) {
    case "esp-now-midi":
      title = "ESP-NOW MIDI";
      break;
    case "enomik":
      title = "Enomik 3000";
      break;
    case "turntangilism":
      title = "Turntangilism 3000";
      break;
    case "b8c":
      title = "Baby 8 Cubes";
      break;
    case "deemex":
      title = "Deemex";
      break;
    case "byodmcse":
      title = "BYODMCSE - Bring Your Own Device Multi-Channel Sound Experience";
      break;
    default:
      title = "Unknown Thing";
  }

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      gap={2}
      maxHeight={"75dvh"}
      overflow={"auto"}
    >
      <Box display={"flex"} gap={2}>
        <Typography variant="h2">{title}</Typography>
        <BackButton></BackButton>
      </Box>
      <Box>
        {id === "esp-now-midi" && <EspNowMidi />}
        {id === "enomik" && <Enomik />}
        {id === "turntangilism" && <Turntangilism />}
        {id === "deemex" && <Deemex />}
        {id === "b8c" && <B8C />}
        {id === "byodmcse" && <BYODMCSE />}
      </Box>
    </Box>
  );
};

export default Thing;
