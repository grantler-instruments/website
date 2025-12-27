
import { Box, Button, List, ListItem } from "@mui/material";

const Enomik = () => {
  return (
    <Box>
      <p>
        Enomik 3000 (ESP-NOW MIDI Kit) is a no-code toolkit for creating custom MIDI devices. 
        It leverages the ESP-NOW protocol to enable wireless MIDI communication between devices, eliminating the need for traditional cables. 
        With Enomik 3000, users can easily build and customize their own MIDI controllers and instruments without any programming knowledge.
        While primarily developed for wireless MIDI applications, Enomik 3000 can also be used for wired MIDI setups if desired.
      </p>
      <p>
        Enomik 3000 includes a set of PCBs:
        <List>
            <ListItem>Dongle: ESP-NOW MIDI receiver, converts ESP-NOW MIDI to USB MIDI and vice versa, class-compliant MIDI device with onboard MIDI monitoring</ListItem>
            <ListItem>Client: Board with connectors for sensors and actuators</ListItem>
            <ListItem>Extender: Board with additional connectors for more sensors and actuators</ListItem>
        </List>

      </p>
     
      <Box display={"flex"} justifyContent="flex-end" my={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://grantler-instruments.github.io/enomik-app"
          target="_blank"
          rel="noopener"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Enomik;
