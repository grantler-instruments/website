import { Box, Button } from "@mui/material";

const Esrever = () => {
  return (
    <Box>
      <Box>
        <p>
          Esrever is an audio plugin that simply reverses the audio signal—
          nothing more, nothing less.
        </p>
        <p>It can be synced to the audio clock or run in free mode.</p>
        <p>
          It is a very quick and dirty plugin, literally. It creates (un)wanted click
          sounds at the end of the playback window.
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
