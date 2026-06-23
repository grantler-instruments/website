import { Box, Button, Typography } from "@mui/material";
import type { EventItem } from "../../data/events";

const GenericEvent = ({ event }: { event: EventItem }) => {
  return (
    <Box sx={{ "& > * + *": { mt: 2 } }}>
      <Typography variant="body1">
        {event.when} at {event.where}
      </Typography>
      <Typography variant="body1">{event.tagline}</Typography>
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

export default GenericEvent;
