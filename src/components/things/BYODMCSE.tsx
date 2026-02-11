
import { Box, Button } from "@mui/material";

const BYODMCSE = () => {
  return (
    <Box>
      <p>
        BYODMCSE - Bring Your Own Device Multi-Channel Sound Experience - is an open-source webaudio renderer that can be controlled remotely via MIDI via MQTT.

      </p>
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/grantler-instruments/esp-now-midi"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default BYODMCSE;
