import { AppBar, Box, Switch } from "@mui/material";
import { useNavigate } from "react-router";
import { useAudioStore } from "./stores/audio";

const Header = () => {
  const navigate = useNavigate();
  const gain = useAudioStore((state) => state.gain);
  const setGain = useAudioStore((state) => state.setGain);
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
        <Switch
          checked={gain === 1}
          onChange={(event) => setGain(event.target.checked ? 1 : 0)}
        />
      </Box>
    </AppBar>
  );
};

export default Header;
