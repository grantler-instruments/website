import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Page from "./Page";
import { useState, useRef, useCallback } from "react";
import deemexThumbnail from "../assets/things/deemex/top.jpg";
import enomikThumbnail from "../assets/things/enomik/enomik_dongle_client.jpg";
import fernbedienungThumbnail from "../assets/things/fernbedienung/screenshot.png";
import gscThumbnail from "../assets/things/gsc/gsc_edit_screenshot.png";
import wd3000Thumbnail from "../assets/things/wd3000/screenshot_overview.png";
import spielereiThumbnail from "../assets/things/spielerei/render.png";
import b8cThumbnail from "../assets/things/b8c/DSCF6341.jpg";
import esreverThumbnail from "../assets/esrever_screenshot.png";
import byodmcseThumbnail from "../assets/things/byodmcse/screenshot.png";
import turntangilismThumbnail from "../assets/things/turntangilism/overview_resized.png";
import espNowMidiThumbnail from "../assets/things/esp-now-midi/topology.svg";

type Thing = {
  name: string;
  destination: string;
  description: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

type PreviewPosition = {
  top: number;
  maxHeight: number;
};

export const things: Thing[] = [
  {
    name: "ESP-NOW MIDI",
    destination: "/things/esp-now-midi",
    description: "wireless midi over esp-now protocol",
    thumbnail: espNowMidiThumbnail,
    thumbnailAlt: "Two MIDI hosts connected over ESP-NOW to four ESP32-S2 Mini boards",
  },
  {
    name: "Enomik 3000",
    destination: "/things/enomik",
    description: "no-code toolkit for creating midi devices",
    thumbnail: enomikThumbnail,
    thumbnailAlt: "Enomik 3000 MIDI dongle",
  },
  {
    name: "Turntangilism 3000",
    destination: "/things/turntangilism",
    description: "postdigital extension kit for traditional turntable setups",
    thumbnail: turntangilismThumbnail,
    thumbnailAlt: "Turntangilism 3000 overview",
  },
  {
    name: "Baby 8 Cubes",
    destination: "/things/b8c",
    description: "tangible step sequencer for kids, grandmas and everyone else",
    thumbnail: b8cThumbnail,
    thumbnailAlt: "Baby 8 Cubes in performance",
  },
  {
    name: "Deemex",
    destination: "/things/deemex",
    description: "dmx interface with midi to dmx and enttec emulation mode",
    thumbnail: deemexThumbnail,
    thumbnailAlt: "Deemex interface",
  },
  {
    name: "esrever",
    destination: "/things/esrever",
    description: "audio plugin that simply reverses the audio signal",
    thumbnail: esreverThumbnail,
    thumbnailAlt: "Esrever plugin interface",
  },
  {
    name: "BYODMCSE",
    destination: "/things/byodmcse",
    description: "build your own device multi channel sound experience",
    thumbnail: byodmcseThumbnail,
    thumbnailAlt: "BYODMCSE, Midge, and Ableton Live running together",
  },
  {
    name: "Grantler Stage Control",
    destination: "/things/gsc",
    description:
      "cross platform, cue based stage control software for theater productions",
    thumbnail: gscThumbnail,
    thumbnailAlt: "Grantler Stage Control cue editor",
  },
  {
    name: "Fernbedienung",
    destination: "/things/fernbedienung",
    description: "remote control app for bitwig",
    thumbnail: fernbedienungThumbnail,
    thumbnailAlt: "Fernbedienung remote-control app",
  },
  {
    name: "WD3000",
    destination: "/things/wd3000",
    description:
      "wire desk for monitoring and composing osc, art-net, tuio, midi, and mqtt",
    thumbnail: wd3000Thumbnail,
    thumbnailAlt: "WD3000 overview",
  },
  {
    name: "Spielerei",
    destination: "/things/spielerei",
    description:
      "c++ creative coding toolkit for interactive exhibits",
    thumbnail: spielereiThumbnail,
    thumbnailAlt: "Spielerei WebGPU render output",
  },
];

const Things = () => {
  const navigate = useNavigate();
  const [hoveredThing, setHoveredThing] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const selectedThing = hoveredThing
    ? things.find((thing) => thing.name === hoveredThing)
    : undefined;

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

  const positionPreview = useCallback((index: number) => {
    const line = itemRefs.current[index]?.getBoundingClientRect();
    if (!line) return;

    const viewportHeight = window.innerHeight;
    const gap = 16;
    const spaceAbove = line.top - gap;
    const spaceBelow = viewportHeight - line.bottom - gap;
    const maxHeight = Math.min(viewportHeight * 0.55, Math.max(spaceAbove, spaceBelow));
    const showBelow = spaceBelow >= spaceAbove;

    setPreviewPosition({
      top: showBelow ? line.bottom + gap : line.top - maxHeight - gap,
      maxHeight,
    });
  }, []);

  return (
    <Page title="Things">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box component="ul" role="list" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {things.map(({ name, destination, description }, index) => {
            const isSelected = hoveredThing === name || focusedIndex === index;

            return (
              <Box
                ref={(el) => {
                  itemRefs.current[index] = el as HTMLElement | null;
                }}
                component="li"
                role="button"
                tabIndex={focusedIndex === index || (focusedIndex === -1 && index === 0) ? 0 : -1}
                key={name}
              sx={{
                  cursor: "pointer",
                  outline: "none",
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "stretch", sm: "baseline" },
                  gap: { xs: 0, sm: 2 },
                  mb: { xs: 1, sm: 0 },
              }}
                onClick={() => navigate(destination)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => {
                  setFocusedIndex(index);
                  positionPreview(index);
                }}
                onMouseEnter={() => {
                  setHoveredThing(name);
                  positionPreview(index);
                }}
                onMouseLeave={() => setHoveredThing(null)}
              >
                <Typography
                  variant="h2"
                  color={isSelected ? "primary" : "textSecondary"}
                  sx={{ minWidth: 0, overflowWrap: "break-word" }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: { xs: 1, sm: isSelected ? 1 : 0.01 },
                    minWidth: 0,
                    overflowWrap: "break-word",
                    fontSize: (theme) => ({
                      xs: "0.75rem",
                      sm: theme.typography.body1.fontSize,
                    }),
                    color: { xs: "text.secondary", sm: "inherit" },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {selectedThing?.thumbnail && (
          <Box
            sx={{
              pointerEvents: "none",
              position: "fixed",
              zIndex: 1,
              top: previewPosition?.top ?? "25dvh",
              right: 32,
              width: "38%",
              maxHeight: previewPosition?.maxHeight ?? "55dvh",
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src={selectedThing.thumbnail}
              alt={selectedThing.thumbnailAlt}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: previewPosition?.maxHeight ?? "55dvh",
                objectFit: "contain",
                objectPosition: "center top",
                opacity: 1,
              }}
            />
          </Box>
        )}
      </Box>
    </Page>
  );
};

export default Things;
