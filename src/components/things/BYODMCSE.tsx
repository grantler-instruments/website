
import { Box, Button, Link } from "@mui/material";

const BYODMCSE = () => {
  return (
    <Box>
      <p>
        BYODMCSE - Bring Your Own Device Multi-Channel Sound Experience - is an open-source webaudio renderer that can be controlled remotely via MIDI via MQTT.
      </p>
      <p>
        It uses the{" "}
        <Link
          href="https://github.com/grantler-instruments/mqtt-midi"
          target="_blank"
          rel="noopener"
        >
          mqtt-midi
        </Link>{" "}
        package for MIDI over MQTT - the CLI bridge to route MIDI from a DAW or
        hardware to the broker, and the browser client library to receive it in
        the renderer.
      </p>
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/grantler-instruments/byodmcse"
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
