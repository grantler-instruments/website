import { Box, Button, Typography } from "@mui/material";
import { getEventById } from "../../data/events";

const WirelessMidiWorkshop = () => {
  const event = getEventById("wireless-midi-workshop");
  if (!event) return null;

  return (
    <Box sx={{ "& > * + *": { mt: 2 } }}>
      <Typography variant="body1">
        {event.when} at {event.where}
      </Typography>
      <Typography variant="body1">{event.tagline}</Typography>
      <Typography variant="body1">
        Hands-on workshop on building wireless MIDI controllers for interactive
        artworks, instruments, and exhibition installations — using the Enomik
        Toolkit and ESP-NOW MIDI.
      </Typography>
      {event.url && (
        <Box display="flex" justifyContent="flex-end" my={2}>
          <Button
            variant="contained"
            color="primary"
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default WirelessMidiWorkshop;
