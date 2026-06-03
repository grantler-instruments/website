import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Page from "./Page";
import { useState, useRef, useCallback } from "react";

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
    },
    {
      name: "Grantler Stage Control",
      destination: "/things/gsc",
      description:
        "cross platform, cue based stage control software for theater productions",
    }
  ];

  const [hoveredThing, setHoveredThing] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const goTo = useCallback(
    (index: number) => {
      const i = (index + things.length) % things.length;
      setFocusedIndex(i);
      itemRefs.current[i]?.focus();
    },
    [things.length]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
        return;
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(things.length - 1);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(things[index].destination);
      }
    },
    [goTo, navigate, things]
  );

  return (
    <Page title="Things">
      <Box
        component="ul"
        role="list"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          width: "100%",
        }}
      >
        {things.map(({ name, destination, description }, index) => (
          <Box
            ref={(el) => {
              itemRefs.current[index] = el as HTMLElement | null;
            }}
            component="li"
            role="button"
            tabIndex={focusedIndex === index || (focusedIndex === -1 && index === 0) ? 0 : -1}
            display="flex"
            key={name}
            sx={{
              cursor: "pointer",
              outline: "none",
              width: "100%",
              minWidth: 0,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "baseline" },
              gap: { xs: 0, sm: 2 },
            }}
            onClick={() => navigate(destination)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onMouseEnter={() => setHoveredThing(name)}
            onMouseLeave={() => setHoveredThing(null)}
          >
            <Typography
              variant="h2"
              color={hoveredThing === name || focusedIndex === index ? "primary" : "textSecondary"}
              sx={{ minWidth: 0, overflowWrap: "break-word" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: {
                  xs: 1,
                  sm: hoveredThing === name || focusedIndex === index ? 1 : 0.01,
                },
                minWidth: 0,
                overflowWrap: "break-word",
                fontSize: (theme) => ({ xs: "0.75rem", sm: theme.typography.body1.fontSize }),
                color: { xs: "text.secondary", sm: "inherit" },
              }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Page>
  );
};

export default Things;
