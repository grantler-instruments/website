import { create } from "zustand";
import { el } from "@elemaudio/core";
import WebRenderer from "@elemaudio/web-renderer";

const ctx = new AudioContext();
const core = new WebRenderer();

interface AudioState {
  isInitialized: boolean;
  spinning: boolean;
  gain: number;
  init: () => void;
  setSpinning: (spinning: boolean) => void;
  setGain: (gain: number) => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isInitialized: false,
  gain: 0,
  spinning: false,
  init: async () => {
    return
    const { isInitialized } = get();
    if (isInitialized) return;

    let node = await core.initialize(ctx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    node.connect(ctx.destination);

    await core.render(el.cycle(440), el.cycle(441));
    set({ isInitialized: true, gain: 1 });
  },
  setSpinning: (spinning: boolean) => set({ spinning }),
  setGain: (gain: number) => {
    const isInitialized = get().isInitialized;
    if(!isInitialized){
        get().init();
    }
    set({ gain });
  },
}));
