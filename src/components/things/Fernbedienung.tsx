import { Box, Button, List, ListItem } from "@mui/material";
import fernbedienungScreenshot from "../../assets/things/fernbedienung/screenshot.png";

const Fernbedienung = () => {
  return (
    <Box>
      <Box
        component="img"
        src={fernbedienungScreenshot}
        alt="Fernbedienung remote control interface"
        sx={{ maxWidth: "100%", height: "auto", display: "block", mb: 2 }}
      />
      <p>
        Fernbedienung is a remote control app for Bitwig. Control the mixer from
        another device on the network, useful when FOH isn't tied to the laptop,
        or when two or more performers share one set.
      </p>
      <p>It consists of two parts:</p>
      <List>
        <ListItem>
          A Bitwig Studio controller extension that reads mixer state via the
          Bitwig API and broadcasts snapshots over WebSocket to all connected
          clients.
        </ListItem>
        <ListItem>
          A web app that can be installed as a PWA and runs completely without
          internet access.
        </ListItem>
      </List>
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/grantler-instruments/fernbedienung"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Fernbedienung;
