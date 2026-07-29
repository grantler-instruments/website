import { Box, Button } from "@mui/material";
import espNowMidiTopology from "../../assets/things/esp-now-midi/topology.svg";

const EspNowMidi = () => {
  return (
    <Box>
      <Box
        component="img"
        src={espNowMidiTopology}
        alt="A MIDI host connected to an ESP-NOW MIDI dongle and ten wireless clients"
        sx={{ maxWidth: "100%", height: "auto", display: "block", mb: 2 }}
      />
      <p>
        ESP-NOW MIDI is a wireless MIDI protocol built on Espressif’s ESP-NOW
        technology, specifically designed to enable reliable, low-latency
        communication between ESP32-based devices. An LGPL-licensed Arduino
        library is available on GitHub to support straightforward integration
        into custom hardware and software projects. The library can also be
        installed directly via the Arduino Library Manager.
      </p>
      <p>
        The API closely follows the design of the standard Arduino MIDI library,
        which allows existing MIDI applications to be adapted with minimal
        modification. Bi-directional communication is fully supported, enabling
        devices to both transmit and receive MIDI messages. In addition, the
        library includes a comprehensive set of example sketches that
        demonstrate common use cases and accelerate the development process.
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

export default EspNowMidi;
