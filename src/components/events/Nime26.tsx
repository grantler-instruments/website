import { Box, Typography } from "@mui/material";
import { getEventById } from "../../data/events";

const Nime26 = () => {
  const event = getEventById("nime-26");
  if (!event) return null;

  return (
    <Box sx={{ "& > * + *": { mt: 2 } }}>
      <Typography variant="body1">
        {event.when} at {event.where}
      </Typography>
      <Typography variant="body1">{event.tagline}</Typography>
    </Box>
  );
};

export default Nime26;
