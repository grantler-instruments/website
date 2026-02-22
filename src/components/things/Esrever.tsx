import { Box, Button } from "@mui/material";
import ReactPlayer from "react-player";
import esreverDemo from "../../assets/esrever_demo.mp3";

const Esrever = () => {
  return (
    <Box>
      <Box>
        <ReactPlayer src={esreverDemo} controls width="100%" height="54px" />
        <p style={{ marginTop: 16 }}>
          Esrever is an audio plugin that simply reverses the audio signal—
          nothing more, nothing less. It can be synced to the audio clock or run
          in free mode. It is a very quick and dirty plugin, literally. It
          creates (un)wanted click sounds at the end of the playback window—
          how noticeable they are depends on the window fade settings. The
          playback can be pitched by +/- 3 octaves.
        </p>
        <p>
          Esrever is open source on GitHub, written in C++ with JUCE, and
          available for Windows, macOS, and Linux.
        </p>
      </Box>
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/grantler-instruments/esrever"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Esrever;
