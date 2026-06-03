import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useAudioStore } from "./stores/audio";
import {
  distortionFromRotation,
  getAudioContext,
  isDspRunning,
  setDistortionAmount as setEngineDistortion,
} from "./dsp/engine";

function angleFromCenter(clientX: number, clientY: number, rect: DOMRect) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  return (Math.atan2(clientY - cy, clientX - cx) * 180) / Math.PI;
}

function normalizeAngleDelta(delta: number) {
  let d = delta;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return d;
}

const Logo = ({ height = 150, className = "" }) => {
  const init = useAudioStore((state) => state.init);
  const gain = useAudioStore((state) => state.gain);
  const setStoreDistortion = useAudioStore((state) => state.setDistortionAmount);
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const dragRef = useRef<{
    pointerId: number;
    startAngle: number;
    startRotation: number;
  } | null>(null);

  const applyDistortion = useCallback(
    (deg: number) => {
      if (!isDspRunning()) return;
      const amount = distortionFromRotation(deg);
      setStoreDistortion(amount);
      void setEngineDistortion(amount);
    },
    [setStoreDistortion]
  );

  const updateRotation = useCallback(
    (clientX: number, clientY: number) => {
      const drag = dragRef.current;
      const wrapper = wrapperRef.current;
      if (!drag || !wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const angle = angleFromCenter(clientX, clientY, rect);
      const delta = normalizeAngleDelta(angle - drag.startAngle);
      const next = drag.startRotation + delta;
      rotationRef.current = next;
      setRotation(next);
      applyDistortion(next);
    },
    [applyDistortion]
  );

  useEffect(() => {
    if (gain > 0) return;
    rotationRef.current = 0;
    setRotation(0);
    dragRef.current = null;
    setDragging(false);
  }, [gain]);

  useEffect(() => {
    if (!dragging) return;

    const onPointerMove = (e: PointerEvent) => {
      if (dragRef.current?.pointerId !== e.pointerId) return;
      updateRotation(e.clientX, e.clientY);
    };

    const endDrag = (e: PointerEvent) => {
      if (dragRef.current?.pointerId !== e.pointerId) return;
      dragRef.current = null;
      setDragging(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, [dragging, updateRotation]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (gain <= 0) return;
    e.preventDefault();

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    dragRef.current = {
      pointerId: e.pointerId,
      startAngle: angleFromCenter(e.clientX, e.clientY, rect),
      startRotation: rotationRef.current,
    };
    setDragging(true);

    void (async () => {
      await init();
      const ctx = getAudioContext();
      if (ctx?.state === "suspended") {
        await ctx.resume();
      }
      applyDistortion(rotationRef.current);
    })();
  };

  const audioOn = gain > 0;

  return (
    <Box
      ref={wrapperRef}
      onPointerDown={handlePointerDown}
      onClick={() => {
        if (gain > 0) void init();
      }}
      sx={{
        display: "inline-block",
        lineHeight: 0,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center center",
        cursor: audioOn ? (dragging ? "grabbing" : "grab") : "default",
        touchAction: audioOn ? "none" : "auto",
        userSelect: "none",
      }}
    >
      <Box
        component="img"
        src="/logo_v1.svg"
        alt="Grantler Instruments Logo"
        draggable={false}
        className={className}
        sx={{ height, width: "auto", display: "block", pointerEvents: "none" }}
      />
    </Box>
  );
};

export default Logo;
