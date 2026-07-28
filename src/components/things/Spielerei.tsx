import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  MobileStepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import spielereiRender from "../../assets/things/spielerei/render.png";
import spielereiDebugger from "../../assets/things/spielerei/debugger.png";

const slides = [
  {
    src: spielereiRender,
    alt: "Spielerei WebGPU render output",
    caption: "render view",
  },
  {
    src: spielereiDebugger,
    alt: "Spielerei live debug UI for tweaking parameters",
    caption: "debug view",
  },
];

const imgSx = {
  maxHeight: "45dvh",
  width: "auto",
  maxWidth: "100%",
  height: "auto",
  display: "block",
} as const;

const Spielerei = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const goNext = () => setActiveStep((s) => (s + 1) % maxSteps);
  const goBack = () => setActiveStep((s) => (s - 1 + maxSteps) % maxSteps);

  return (
    <Box>
      {isSmall ? (
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            component="img"
            src={slides[activeStep].src}
            alt={slides[activeStep].alt}
            onClick={goNext}
            sx={{ ...imgSx, cursor: "pointer" }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
            {slides[activeStep].caption}
          </Typography>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ bgcolor: "transparent", pt: 1, width: "100%", maxWidth: 360 }}
            nextButton={
              <IconButton size="small" onClick={goNext} aria-label="next slide">
                <KeyboardArrowRight />
              </IconButton>
            }
            backButton={
              <IconButton
                size="small"
                onClick={goBack}
                aria-label="previous slide"
              >
                <KeyboardArrowLeft />
              </IconButton>
            }
          />
        </Box>
      ) : (
        <Box
          sx={{
            mb: 2,
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
          }}
        >
          {slides.map((slide) => (
            <Box key={slide.alt} sx={{ flex: "1 1 0", minWidth: 0 }}>
              <Box
                component="img"
                src={slide.src}
                alt={slide.alt}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "45dvh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5, display: "block" }}
              >
                {slide.caption}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      <p>
        Spielerei is a C++ creative coding toolkit for interactive exhibits. It
        runs on WebGPU and covers the usual install toolkit: graphics, sound,
        cameras, OSC, MIDI, serial, physics, and Syphon on macOS when you need
        to hand frames off to other apps.
      </p>
      <p>
        The drawing API is sketch-style for 2D, so you can get something on
        screen quickly. It also covers 3D: cameras, lit materials, instancing,
        glTF models, and custom shaders when you need the performance. While
        you’re building, you can tweak parameters live. For the floor, you ship
        a release build without the debug UI.
      </p>
      <p>
        It’s meant for people who like creative coding but need something that
        holds up in a museum, gallery, or multi-machine room. Pull in the modules
        you need and leave the rest.
      </p>
      <p>
        Spielerei is currently closed source. I’d like to open source it once the
        visual patcher is finished.
      </p>
      <p>Modules include, amongst others:</p>
      <List>
        <ListItem>
          graphics: 2D sketch drawing plus 3D (cameras, lighting, instancing,
          glTF models) and custom WebGPU shaders
        </ListItem>
        <ListItem>audio: playback and synthesis via miniaudio</ListItem>
        <ListItem>media: video and camera capture via FFmpeg</ListItem>
        <ListItem>osc: Open Sound Control</ListItem>
        <ListItem>midi: MIDI I/O via RtMidi</ListItem>
        <ListItem>serial: serial port I/O</ListItem>
        <ListItem>physics: Box2D (2D) and Jolt (3D)</ListItem>
        <ListItem>syphon: macOS Syphon send/receive for sharing frames</ListItem>
        <ListItem>params: live parameter groups with a debug inspector</ListItem>
        <ListItem>net: TCP, UDP, and an embedded web server</ListItem>
        <ListItem>webview: native browser views inside the app window</ListItem>
        <ListItem>imgui: Dear ImGui overlay for debug UIs</ListItem>
        <ListItem>ecs: EnTT-backed entity world</ListItem>
        <ListItem>tween: Tweeny-based animation helpers</ListItem>
        <ListItem>…</ListItem>
      </List>
    </Box>
  );
};

export default Spielerei;
