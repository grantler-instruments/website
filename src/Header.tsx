import { AppBar, Box } from "@mui/material";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Box
        p={2}
        fontSize={"1.5rem"}
        fontWeight={600}
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
      >
        Grantler Instruments
      </Box>
    </AppBar>
  );
};

export default Header;
