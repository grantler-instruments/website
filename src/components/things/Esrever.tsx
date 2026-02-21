import { Box, Button } from "@mui/material";

const Esrever = () => {
  return (
    <Box>
      <Box>
        <p>
          Esrever is an audio plugin that simply reverses the audio signal—
          nothing more, nothing less. It can be synced to the audio clock or run
          in free mode. It is a very quick and dirty plugin, literally. It
          creates (un)wanted click sounds at the end of the playback window.
        </p>
        <p>
          esrever is open source and available on GitHub. It is written in C++
          and uses the JUCE framework. It is available for Windows, macOS and
          Linux.
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
