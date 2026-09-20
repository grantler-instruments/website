import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import type { MetaFunction } from "react-router";
import Page from "./Page";
import { useState, useRef, useCallback } from "react";
import { things } from "../data/things";

type PreviewPosition = {
  top: number;
  maxHeight: number;
};

export const meta: MetaFunction = () => [{ title: "Things · Grantler Instruments" }];

const Things = () => {
  const navigate = useNavigate();
  const [hoveredThing, setHoveredThing] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const selectedThing = hoveredThing
    ? things.find((thing) => thing.name === hoveredThing)
    : undefined;

  const goTo = useCallback(
    (index: number) => {
      const i = (index + things.length) % things.length;
      setFocusedIndex(i);
      itemRefs.current[i]?.focus();
    },
    [things.length]
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
        goTo(things.length - 1);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate(things[index].destination);
      }
    },
    [goTo, navigate, things]
  );

  const positionPreview = useCallback((index: number) => {
    const line = itemRefs.current[index]?.getBoundingClientRect();
    if (!line) return;

    const viewportHeight = window.innerHeight;
    const gap = 16;
    const spaceAbove = line.top - gap;
    const spaceBelow = viewportHeight - line.bottom - gap;
    const maxHeight = Math.min(viewportHeight * 0.55, Math.max(spaceAbove, spaceBelow));
    const showBelow = spaceBelow >= spaceAbove;

    setPreviewPosition({
      top: showBelow ? line.bottom + gap : line.top - maxHeight - gap,
      maxHeight,
    });
  }, []);

  return (
    <Page title="Things">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box component="ul" role="list" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {things.map(({ name, destination, description }, index) => {
            const isSelected = hoveredThing === name || focusedIndex === index;

            return (
              <Box
                ref={(el) => {
                  itemRefs.current[index] = el as HTMLElement | null;
                }}
                component="li"
                role="button"
                tabIndex={focusedIndex === index || (focusedIndex === -1 && index === 0) ? 0 : -1}
                key={name}
              sx={{
                  cursor: "pointer",
                  outline: "none",
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "stretch", sm: "baseline" },
                  gap: { xs: 0, sm: 2 },
                  mb: { xs: 1, sm: 0 },
              }}
                onClick={() => navigate(destination)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => {
                  setFocusedIndex(index);
                  positionPreview(index);
                }}
                onMouseEnter={() => {
                  setHoveredThing(name);
                  positionPreview(index);
                }}
                onMouseLeave={() => setHoveredThing(null)}
              >
                <Typography
                  variant="h2"
                  color={isSelected ? "primary" : "textSecondary"}
                  sx={{ minWidth: 0, overflowWrap: "break-word" }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: { xs: 1, sm: isSelected ? 1 : 0.01 },
                    minWidth: 0,
                    overflowWrap: "break-word",
                    fontSize: (theme) => ({
                      xs: "0.75rem",
                      sm: theme.typography.body1.fontSize,
                    }),
                    color: { xs: "text.secondary", sm: "inherit" },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {selectedThing?.thumbnail && (
          <Box
            sx={{
              pointerEvents: "none",
              position: "fixed",
              zIndex: 1,
              top: previewPosition?.top ?? "25dvh",
              right: 32,
              width: "38%",
              maxHeight: previewPosition?.maxHeight ?? "55dvh",
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Box
              component="img"
              src={selectedThing.thumbnail}
              alt={selectedThing.thumbnailAlt}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: previewPosition?.maxHeight ?? "55dvh",
                objectFit: "contain",
                objectPosition: "center top",
                opacity: 1,
              }}
            />
          </Box>
        )}
      </Box>
    </Page>
  );
};

export default Things;
