import { AppBar, Box, IconButton, Switch, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";
import { useAudioStore } from "./stores/audio";
import {
  initElementary,
  stopElementary,
  renderTapeNoise,
  isDspRunning,
  setDistortionAmount as setEngineDistortion,
  getAudioContext,
} from "./dsp/engine";
import { useEffect, useState } from "react";
import { eventListTitle, getEventById } from "./data/events";

const thingTitles: Record<string, string> = {
  "esp-now-midi": "ESP-NOW MIDI",
  enomik: "Enomik 3000",
  turntangilism: "Turntangilism 3000",
  b8c: "Baby 8 Cubes",
  deemex: "Deemex",
  byodmcse: "BYODMCSE, Bring Your Own Device Multi-Channel Sound Experience",
  esrever: "esrever",
  gsc: "Grantler Stage Control",
  fernbedienung: "Fernbedienung",
  wd3000: "WD3000",
  spielerei: "Spielerei",
};

function getMobileTitle(pathname: string) {
  if (pathname === "/things") return "Things";
  if (pathname === "/events") return "Dates";
  if (pathname === "/about") return "About";
  if (pathname === "/contact") return "Contact";

  const thingId = pathname.match(/^\/things\/([^/]+)$/)?.[1];
  if (thingId) return thingTitles[thingId] ?? "Unknown Thing";

  const eventId = pathname.match(/^\/events\/([^/]+)$/)?.[1];
  if (eventId) {
    const event = getEventById(eventId);
    return event ? eventListTitle(event) : "Unknown Event";
  }

  return "";
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobileTitle = getMobileTitle(location.pathname);
  const isClosable = /^(\/things(\/[^/]+)?|\/events(\/[^/]+)?|\/about|\/contact)$/.test(
    location.pathname
  );
  const setGain = useAudioStore((state) => state.setGain);
  const [dspOn, setDspOn] = useState(false);

  useEffect(() => {
    setDspOn(isDspRunning());
  }, []);

  const setDistortionAmount = useAudioStore((s) => s.setDistortionAmount);

  const handleSwitch = async (checked: boolean) => {
    if (checked) {
      await initElementary();
      await renderTapeNoise();
      const ctx = getAudioContext();
      if (ctx?.state === "suspended") {
        await ctx.resume();
      }
      setDspOn(true);
      setGain(1);
      navigate("/");
    } else {
      stopElementary();
      setDspOn(false);
      setGain(0);
      setDistortionAmount(0);
      void setEngineDistortion(0);
    }
  };

  const handleClose = () => {
    if (/^\/things\/[^/]+$/.test(location.pathname)) {
      navigate("/things");
      return;
    }
    if (/^\/events\/[^/]+$/.test(location.pathname)) {
      navigate("/events");
      return;
    }
    navigate("/");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box display={"flex"}>
        <Box
          p={2}
          fontSize={"1.5rem"}
          fontWeight={600}
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            display: { xs: location.pathname === "/" ? "block" : "none", sm: "block" },
          }}
          color={"primary.main"}
        >
          Grantler Instruments
        </Box>
        <Box
          component="img"
          src="/logo_v1.svg"
          alt="Grantler Instruments"
          onClick={() => navigate("/")}
          sx={{
            display: { xs: location.pathname === "/" ? "none" : "block", sm: "none" },
            height: 32,
            width: "auto",
            m: 1,
            cursor: "pointer",
          }}
        />
        {mobileTitle && (
          <Typography
            variant="h2"
            color="primary"
            sx={{
              display: { xs: "block", sm: "none" },
              alignSelf: "center",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {mobileTitle}
          </Typography>
        )}
        <Box flex={1} />
        {location.pathname === "/" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Switch
              checked={dspOn}
              onChange={(event) => handleSwitch(event.target.checked)}
            />
          </Box>
        )}
        {isClosable && (
          <IconButton
            aria-label="Close page"
            onClick={handleClose}
            sx={{ display: { xs: "inline-flex", sm: "none" }, m: 0.5 }}
          >
            <Close sx={{ fontSize: 28 }} />
          </IconButton>
        )}
      </Box>
    </AppBar>
  );
};

export default Header;
