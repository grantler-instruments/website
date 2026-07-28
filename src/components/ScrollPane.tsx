import { Box, type SxProps, type Theme } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";

const ScrollPane = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  const paneRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasMoreBelow, setHasMoreBelow] = useState(false);

  const updateScrollState = useCallback(() => {
    const pane = paneRef.current;
    if (!pane) return;

    setHasMoreBelow(pane.scrollHeight - pane.scrollTop - pane.clientHeight > 8);
  }, []);

  useEffect(() => {
    const pane = paneRef.current;
    const content = contentRef.current;
    if (!pane) return;

    updateScrollState();
    pane.addEventListener("scroll", updateScrollState, { passive: true });

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(pane);
    if (content) observer.observe(content);

    return () => {
      pane.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  return (
    <Box sx={[{ position: "relative", flex: 1, minHeight: 0 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box ref={paneRef} sx={{ height: "100%", overflow: "auto" }}>
        <Box ref={contentRef}>{children}</Box>
      </Box>
      <Box
        sx={{
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          height: 72,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          background: (theme) =>
            `linear-gradient(to top, ${theme.palette.background.default} 50%, transparent)`,
          opacity: hasMoreBelow ? 1 : 0,
          transition: "opacity 160ms ease",
        }}
      />
    </Box>
  );
};

export default ScrollPane;
