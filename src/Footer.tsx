import { Box, IconButton, List, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppStore } from "./stores/app";
import { Close } from "@mui/icons-material";
import { NavLink } from "react-router";

const Footer = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const menuOpen = useAppStore((state) => state.menuOpen);
  return (
    <Box
      p={2}
      alignContent={"center"}
      textAlign={menuOpen ? "left" : "center"}
      sx={{ backgroundColor: menuOpen ? "primary.main" : "transparent" }}
    >
      {menuOpen && (
        <Box display={"flex"}>
          <Box flex={1} display={"flex"} flexDirection={"row"} gap={4}>
            <List sx={{ display: "flex", flexDirection: "row", p: 0 }}>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  component={NavLink}
                  to={item.link}
                >
                  {item.label}
                </ListItemButton>
              ))}
            </List>
          </Box>
          <IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <Close />
          </IconButton>
        </Box>
      )}
      {!menuOpen && (
        <Box>
          <IconButton onClick={() => setMenuOpen(!menuOpen)} color="primary">
            <MenuIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
