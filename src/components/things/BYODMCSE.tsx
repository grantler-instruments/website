
import { Box, Button, Link } from "@mui/material";
import byodmcseScreenshot from "../../assets/things/byodmcse/screenshot.png";

const BYODMCSE = () => {
  return (
    <Box>
      <Box
        component="img"
        src={byodmcseScreenshot}
        alt="BYODMCSE, Midge, and Ableton Live running together"
        sx={{ maxWidth: "100%", height: "auto", display: "block", mb: 2 }}
      />
      <p>
        BYODMCSE, Bring Your Own Device Multi-Channel Sound Experience, is an open-source webaudio renderer that can be controlled remotely via MIDI via MQTT.
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
        package for MIDI over MQTT, the CLI bridge to route MIDI from a DAW or
        hardware to the broker, or{" "}
        <Link
          href="https://grantler-instruments.github.io/midge/"
          target="_blank"
          rel="noopener"
        >
          Midge
        </Link>{" "}
        as a GUI-based alternative to the CLI tool. It runs as a desktop app
        or in the browser, bridging MIDI in both directions with MQTT and
        supporting notes, control changes, program changes, pitch bend, and
        SysEx. The browser client library receives the MIDI in the renderer.
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
