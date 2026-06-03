import { create } from "zustand";
import { initElementary, renderTapeNoise, isDspRunning } from "../dsp/engine";

interface AudioState {
  isInitialized: boolean;
  spinning: boolean;
  gain: number;
  distortionAmount: number;
  init: () => Promise<void>;
  setSpinning: (spinning: boolean) => void;
  setGain: (gain: number) => void;
  setDistortionAmount: (amount: number) => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isInitialized: false,
  gain: 0,
  distortionAmount: 0,
  spinning: false,
  init: async () => {
    if (get().gain <= 0) return;
    if (isDspRunning()) {
      set({ isInitialized: true, gain: 1 });
      return;
    }
    await initElementary();
    await renderTapeNoise();
    set({ isInitialized: true, gain: 1 });
  },
  setSpinning: (spinning: boolean) => set({ spinning }),
  setGain: (gain: number) => set({ gain }),
  setDistortionAmount: (amount: number) =>
    set({ distortionAmount: Math.max(0, Math.min(1, amount)) }),
}));
