import { Box } from "@mui/material";
import ReactPlayer from "react-player";

const B8C = () => {
  return (
    <Box>
      <p>
        A tangible step sequencer inspired by the Baby 8, a well-known design in
        the modular synthesis world. The device consists of eight translucent
        cubes, each representing a step in the sequence. By rotating the cubes,
        the user selects the drum sound assigned to each step. Every sound is
        indicated by a distinct color displayed within the cube.
      </p>
      <p>
        Besides step manipulation, performers can tilt the whole instrument.
        The playhead behaves like it is walking across the cubes: raising the
        right-hand side makes it walk uphill, so it needs more energy and gets
        slower; raising the left-hand side makes it walk downhill, so it needs
        less energy and gets faster. Tilting toward the performer changes the
        distortion amount; tilting away changes the feedback and delay amount.
        A distance sensor manipulates the volume while playing: the closer one
        gets, the quieter it is.
      </p>
      <p>
        The instrument is fully standalone and does not require a computer. It
        includes a built-in amplifier and speaker, as well as a line output. In
        addition, it can function as a MIDI device with MIDI clock
        synchronization. Despite its playful form, it is capable of clocking
        serious live performance setups.
      </p>
      <ReactPlayer src="https://www.youtube.com/watch?v=fkRQ0tDRCkk"></ReactPlayer>
    </Box>
  );
};

export default B8C;
