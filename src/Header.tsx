import { AppBar, Box, Switch } from "@mui/material";
import { useNavigate } from "react-router";
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

const Header = () => {
  const navigate = useNavigate();
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

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box display={"flex"}>
        <Box
          p={2}
          fontSize={"1.5rem"}
          fontWeight={600}
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
          color={"primary.main"}
        >
          Grantler Instruments
        </Box>
        <Box flex={1} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Switch
            checked={dspOn}
            onChange={(event) => handleSwitch(event.target.checked)}
          />
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
