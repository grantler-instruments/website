import { create } from "zustand";

interface AppState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
}));
