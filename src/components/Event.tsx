import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import BackButton from "./BackButton";
import { eventListTitle, getEventById } from "../data/events";
import WirelessMidiWorkshop from "./events/WirelessMidiWorkshop";
import TurntangilismEvent from "./events/TurntangilismEvent";
import Nime26 from "./events/Nime26";

const Event = () => {
  const { id } = useParams();
  const event = id ? getEventById(id) : undefined;
  const title = event ? eventListTitle(event) : "Unknown Event";

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxHeight="75dvh"
      width="100%"
      minWidth={0}
      p={2}
    >
      <Box
        display="flex"
        gap={2}
        minWidth={0}
        alignItems="flex-start"
        flexShrink={0}
      >
        <Typography
          variant="h2"
          sx={{ minWidth: 0, flex: 1, overflowWrap: "break-word" }}
        >
          {title}
        </Typography>
        <BackButton />
      </Box>
      <Box sx={{ flex: 1, minHeight: 0, overflow: "auto", mt: 2, p: 2 }}>
        {id === "wireless-midi-workshop" && <WirelessMidiWorkshop />}
        {id === "turntangilism" && <TurntangilismEvent />}
        {id === "nime-26" && <Nime26 />}
      </Box>
    </Box>
  );
};

export default Event;
