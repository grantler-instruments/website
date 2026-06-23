import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import Page from "./Page";
import { useState, useRef, useCallback } from "react";
import { eventListTitle, events } from "../data/events";

const Events = () => {
  const navigate = useNavigate();
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const goTo = useCallback(
    (index: number) => {
      const i = (index + events.length) % events.length;
      setFocusedIndex(i);
      itemRefs.current[i]?.focus();
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goTo(index + 1);
        return;
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(index - 1);
        return;
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
        return;
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(events.length - 1);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(`/events/${events[index].id}`);
      }
    },
    [goTo, navigate],
  );

  return (
    <Page title="Dates">
      <Box
        component="ul"
        role="list"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          width: "100%",
        }}
      >
        {events.map((event, index) => (
          <Box
            ref={(el) => {
              itemRefs.current[index] = el as HTMLElement | null;
            }}
            component="li"
            role="button"
            tabIndex={
              focusedIndex === index || (focusedIndex === -1 && index === 0)
                ? 0
                : -1
            }
            display="flex"
            key={event.id}
            sx={{
              cursor: "pointer",
              outline: "none",
              width: "100%",
              minWidth: 0,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "stretch", sm: "baseline" },
              gap: { xs: 0, sm: 2 },
            }}
            onClick={() => navigate(`/events/${event.id}`)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <Typography
              variant="h2"
              color={
                hoveredEvent === event.id || focusedIndex === index
                  ? "primary"
                  : "textSecondary"
              }
              sx={{ minWidth: 0, overflowWrap: "break-word" }}
            >
              {eventListTitle(event)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: {
                  xs: 1,
                  sm:
                    hoveredEvent === event.id || focusedIndex === index
                      ? 1
                      : 0.01,
                },
                minWidth: 0,
                overflowWrap: "break-word",
                fontSize: (theme) => ({
                  xs: "0.75rem",
                  sm: theme.typography.body1.fontSize,
                }),
                color: { xs: "text.secondary", sm: "inherit" },
              }}
            >
              {event.tagline}
            </Typography>
          </Box>
        ))}
      </Box>
    </Page>
  );
};

export default Events;
