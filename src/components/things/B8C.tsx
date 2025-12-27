
import { Box } from "@mui/material";
import ReactPlayer from 'react-player'

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
