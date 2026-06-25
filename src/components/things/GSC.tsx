import { Box, Button, List, ListItem } from "@mui/material";
import gscEditScreenshot from "../../assets/things/gsc/gsc_edit_screenshot.png";

const GSC = () => {
  return (
    <Box>
      <Box
        component="img"
        src={gscEditScreenshot}
        alt="Grantler Stage Control edit view"
        sx={{ maxWidth: "100%", height: "auto", display: "block", mb: 2 }}
      />
      <p>
        Grantler Stage Control (GSC) is cross-platform, cue-based stage control
        software built for small theater productions, conferences, and other
        live events where a full lighting desk or separate show-control stack
        would be overkill.
      </p>
      <p>
        Run the show from a single timeline: trigger audio, video, and lighting
        cues together, and lean on built-in utilities for everyday stage tasks.
        GSC speaks OSC and MIDI, so you can drive external gear, DAWs, media
        servers, and lighting software from the same cue list. A built-in remote
        UI lets crew on the network monitor the show and fire cues from phones or
        tablets, useful backstage or at FOH without crowding the main machine.
      </p>
      <p>
        Run GSC in the browser or install the desktop app, use whichever fits your
        venue and machine.
      </p>
      <p>Features include:</p>
      <List>
        <ListItem>Audio, video, and lighting cues in one show file</ListItem>
        <ListItem>Utilities for common stage-control workflows</ListItem>
        <ListItem>OSC and MIDI integration with your existing toolchain</ListItem>
        <ListItem>
          Remote UI for monitoring show state and triggering cues
        </ListItem>
      </List>
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://gsc.grantler-instruments.com"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default GSC;
