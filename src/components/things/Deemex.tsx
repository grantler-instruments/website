import { Box } from "@mui/material";

const Deemex = () => {
  return (
    <Box>
      <p>
        Deemex is a Teensy-based DMX interface that provides an easy-to-use API
        for controlling DMX lighting systems via MIDI. It enables users to
        control lighting fixtures and effects through standard MIDI messages,
        originating from any DAW, patching environment, mobile device, web
        browser, or other MIDI-capable software or hardware.
      </p>
      <p>
        Deemex makes it easy to keep lighting perfectly in sync with a live set.
        Lighting changes can be triggered directly from MIDI events, allowing
        cues to follow the music with precise timing. This works seamlessly with
        tools such as Ableton Live, where lighting can be automated alongside
        musical parameters. No more relying on a lighting technician tapping
        tempo by hand; the light show simply follows the performance.
      </p>
      <p>
        In addition to its MIDI-to-DMX functionality, Deemex emulates the widely
        used Enttec DMX Pro interface. This ensures compatibility with a broad
        range of existing lighting software and toolchains, enabling it to
        function as a drop-in replacement in many professional and experimental
        setups.
      </p>
    </Box>
  );
};

export default Deemex;
