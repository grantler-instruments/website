import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import B8C from "./things/B8C";
import Enomik from "./things/Enomik";
import Turntangilism from "./things/Turntangilism";
import Deemex from "./things/Deemex";
import BackButton from "./BackButton";
import EspNowMidi from "./things/EspNowMidi";
import BYODMCSE from "./things/BYODMCSE";
import Esrever from "./things/Esrever";
import GSC from "./things/GSC";
import Fernbedienung from "./things/Fernbedienung";
import WD3000 from "./things/WD3000";
import Spielerei from "./things/Spielerei";
import ScrollPane from "./ScrollPane";

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
      title = "BYODMCSE, Bring Your Own Device Multi-Channel Sound Experience";
      break;
    case "esrever":
      title = "esrever";
      break;
    case "gsc":
      title = "Grantler Stage Control";
      break;
    case "fernbedienung":
      title = "Fernbedienung";
      break;
    case "wd3000":
      title = "WD3000";
      break;
    case "spielerei":
      title = "Spielerei";
      break;
    default:
      title = "Unknown Thing";
  }

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      height={"75dvh"}
      width={"100%"}
      minWidth={0}
      p={2}
    >
      <Box
        display={"flex"}
        gap={2}
        minWidth={0}
        alignItems="flex-start"
        flexShrink={0}
      >
        <Typography variant="h2" sx={{ minWidth: 0, flex: 1, overflowWrap: "break-word" }}>
          {title}
        </Typography>
        <BackButton />
      </Box>
      <ScrollPane sx={{ mt: 2 }}>
        <Box p={2}>
          {id === "esp-now-midi" && <EspNowMidi />}
          {id === "enomik" && <Enomik />}
          {id === "turntangilism" && <Turntangilism />}
          {id === "deemex" && <Deemex />}
          {id === "b8c" && <B8C />}
          {id === "byodmcse" && <BYODMCSE />}
          {id === "esrever" && <Esrever />}
          {id === "gsc" && <GSC />}
          {id === "fernbedienung" && <Fernbedienung />}
          {id === "wd3000" && <WD3000 />}
          {id === "spielerei" && <Spielerei />}
        </Box>
      </ScrollPane>
    </Box>
  );
};

export default Thing;
