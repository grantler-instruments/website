import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import BackButton from "./BackButton";
import { eventListTitle, getEventById } from "../data/events";
import WirelessMidiWorkshop from "./events/WirelessMidiWorkshop";
import TurntangilismEvent from "./events/TurntangilismEvent";
import GenericEvent from "./events/GenericEvent";
import ScrollPane from "./ScrollPane";

const Event = () => {
  const { id } = useParams();
  const event = id ? getEventById(id) : undefined;
  const title = event ? eventListTitle(event) : "Unknown Event";

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="75dvh"
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
      <ScrollPane sx={{ mt: 2 }}>
        <Box p={2}>
          {id === "wireless-midi-workshop" && <WirelessMidiWorkshop />}
          {id === "turntangilism" && <TurntangilismEvent />}
          {(id === "nime-26-paper" || id === "nime-26-workshop") && event && (
            <GenericEvent event={event} />
          )}
        </Box>
      </ScrollPane>
    </Box>
  );
};

export default Event;
