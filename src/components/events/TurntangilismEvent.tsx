import { Box, Typography } from "@mui/material";
import { getEventById } from "../../data/events";

const TurntangilismEvent = () => {
  const event = getEventById("turntangilism");
  if (!event) return null;

  return (
    <Box sx={{ "& > * + *": { mt: 2 } }}>
      <Typography variant="body1">
        {event.when} at {event.where}
      </Typography>
      <Typography variant="body1">{event.tagline}</Typography>
      {event.format && (
        <Typography variant="body1">{event.format}</Typography>
      )}
    </Box>
  );
};

export default TurntangilismEvent;
