import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box position={"relative"}>

    <IconButton onClick={() => navigate(-1)} sx={{position: 'absolute', right: -32, top: -8}}>
      <Close sx={{ fontSize: "32px" }} />
    </IconButton>
    </Box>
  );
};

export default BackButton;
