import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Page from "./Page";
import { useState } from "react";

const Things = () => {
  const navigate = useNavigate();
  const things = [
    {
      name: "ESP-NOW MIDI",
      destination: "/things/esp-now-midi",
      description: "wireless midi over esp-now protocol",
    },
    {
      name: "Enomik 3000",
      destination: "/things/enomik",
      description: "no-code toolkit for creating midi devices",
    },
    {
      name: "Turntangilism 3000",
      destination: "/things/turntangilism",
      description: "postdigital extension kit for traditional turntable setups",
    },
    {
      name: "Baby 8 Cubes",
      destination: "/things/b8c",
      description:
        "tangible step sequencer for kids, grandmas and everyone else",
    },
    {
      name: "Deemex",
      destination: "/things/deemex",
      description: "dmx interface with midi to dmx and enttec emulation mode",
    },
    {
      name: "esrever",
      destination: "/things/esrever",
      description: "audio plugin that simply reverses the audio signal",
    },
    {
        name: "BYODMCSE",
        destination: "/things/byodmcse",
        description: "build your own device multi channel sound experience",
    }
  ];

  const [hoveredThing, setHoveredThing] = useState<string | null>(null);
  return (
    <Page title="Things">
      {things.map(({ name, destination, description }) => (
        <Box
          display="flex"
          gap={2}
          key={name}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(destination)}
          onMouseEnter={() => {
            setHoveredThing(name);
          }}
          onMouseLeave={() => {
            setHoveredThing(null);
          }}
        >
          <Typography variant="h2" color={hoveredThing === name ? "primary" : "textSecondary"}>
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: hoveredThing === name ? 1 : 0.01 }}
          >
            {description}
          </Typography>
        </Box>
      ))}
    </Page>
  );
};

export default Things;
