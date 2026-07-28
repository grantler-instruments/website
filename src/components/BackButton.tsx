import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/^#/, "") || "/";

  const handleClose = () => {
    // Thing detail: /things/:id -> go to things list
    if (/^\/things\/[^/]+$/.test(pathname)) {
      navigate("/things");
      return;
    }
    if (/^\/events\/[^/]+$/.test(pathname)) {
      navigate("/events");
      return;
    }
    // Things list (or other pages with back): go home
    navigate("/");
  };

  return (
    <Box
      position={"relative"}
      flexShrink={0}
      width={48}
      height={48}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <IconButton onClick={handleClose} sx={{ position: "absolute", right: 0, top: -8 }}>
        <Close sx={{ fontSize: "32px" }} />
      </IconButton>
    </Box>
  );
};

export default BackButton;
