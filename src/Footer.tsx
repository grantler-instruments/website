import { useRef, useEffect, useCallback } from "react";
import { Box, IconButton, List, ListItemButton, useTheme } from "@mui/material";
import Apps from "@mui/icons-material/Apps";
import { useAppStore } from "./stores/app";
import { Close } from "@mui/icons-material";
import { NavLink } from "react-router";

const Footer = () => {
  const theme = useTheme();
  const menuItems = [
    { label: "/", link: "/" },
    { label: "About", link: "/about" },
    { label: "Things", link: "/things" },
    { label: "Contact", link: "/contact" },
  ];
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const menuOpen = useAppStore((state) => state.menuOpen);
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const getMenuLinks = useCallback(() => {
    return Array.from(listRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const links = getMenuLinks();
      if (links.length) links[0].focus();
      else menuRef.current?.focus();
    }
  }, [menuOpen, getMenuLinks]);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (!menuOpen) return;
    const links = getMenuLinks();
    if (links.length === 0) return;
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "Escape") {
      e.preventDefault();
      setMenuOpen(false);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = currentIndex < 0 ? 0 : Math.min(currentIndex + 1, links.length - 1);
      links[next].focus();
      return;
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = currentIndex <= 0 ? links.length - 1 : currentIndex - 1;
      links[prev].focus();
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      links[0].focus();
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      links[links.length - 1].focus();
      return;
    }
  };

  return (
    <Box
      ref={menuRef}
      tabIndex={menuOpen ? -1 : undefined}
      onKeyDown={handleMenuKeyDown}
      onBlur={(e) => {
        if (!menuOpen) return;
        const next = e.relatedTarget as Node | null;
        if (next && menuRef.current?.contains(next)) return;
        setMenuOpen(false);
      }}
      p={2}
      alignContent={"center"}
      textAlign={menuOpen ? "left" : "center"}
      sx={{ backgroundColor: menuOpen ? "primary.main" : "transparent" }}
    >
      {menuOpen && (
        <Box
          display={"flex"}
          sx={{
            flexDirection: "row",
            alignItems: "center",
            [theme.breakpoints.only("xs")]: {
              flexDirection: "column",
              alignItems: "stretch",
            },
          }}
        >
          <Box
            flex={1}
            display={"flex"}
            sx={{
              flexDirection: "row",
              gap: 4,
              [theme.breakpoints.only("xs")]: {
                flexDirection: "column",
                gap: 0,
              },
            }}
          >
            <List
              ref={listRef}
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 0,
                [theme.breakpoints.only("xs")]: {
                  flexDirection: "column",
                },
              }}
            >
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.label}
                  component={NavLink}
                  to={item.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </ListItemButton>
              ))}
            </List>
          </Box>
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 48 },
              alignSelf: "center",
              [theme.breakpoints.only("xs")]: {
                alignSelf: "flex-end",
              },
            }}
          >
            <Close />
          </IconButton>
        </Box>
      )}
      {!menuOpen && (
        <Box>
          <IconButton onClick={() => setMenuOpen(!menuOpen)} color="primary" sx={{ "& .MuiSvgIcon-root": { fontSize: 48 } }}>
            <Apps />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
