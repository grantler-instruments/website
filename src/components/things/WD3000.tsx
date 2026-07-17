import { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  MobileStepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import wd3000Screenshot from "../../assets/things/wd3000/screenshot.png";
import wd3000Overview from "../../assets/things/wd3000/screenshot_overview.png";

const slides = [
  {
    src: wd3000Overview,
    alt: "WD3000 home overview with performer, debugger, and settings",
  },
  {
    src: wd3000Screenshot,
    alt: "WD3000 MediaPipe hand tracking performer",
  },
];

const imgSx = {
  maxHeight: "45dvh",
  width: "auto",
  maxWidth: "100%",
  height: "auto",
  display: "block",
} as const;

const WD3000 = () => {
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
            flexWrap: "wrap",
          }}
        >
          {slides.map((slide) => (
            <Box
              key={slide.alt}
              component="img"
              src={slide.src}
              alt={slide.alt}
              sx={imgSx}
            />
          ))}
        </Box>
      )}
      <p>
        WD3000 (WireDesk — WD for short) is a cross-platform app for monitoring
        and composing OSC, Art-Net, TUIO, MIDI, and MQTT traffic. Built with
        Tauri, React, and TypeScript, it runs on desktop and mobile, and is meant
        as a wire desk for show control, interactive installs, and networked
        performance setups.
      </p>
      <p>
        Beyond the protocol debugger, WD3000 includes a performer side: build a
        custom control UI, map device sensors, or route camera pose and hand
        tracking via MediaPipe to OSC, MIDI, or MQTT.
      </p>
      <p>This is a work in progress and will be published soon.</p>
      <p>Features include:</p>
      <List>
        <ListItem>
          Live monitoring and composing for OSC, Art-Net, TUIO, MIDI, and MQTT
        </ListItem>
        <ListItem>
          Performer UI with editable controls mapped to named I/O endpoints
        </ListItem>
        <ListItem>
          Sensor and MediaPipe inputs for body and hand tracking
        </ListItem>
        <ListItem>Project import/export for sharing layouts and configs</ListItem>
      </List>
    </Box>
  );
};

export default WD3000;
