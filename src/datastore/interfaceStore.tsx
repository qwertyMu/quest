import create from "zustand";

type directions = "left" | "right";

export interface interfaceState {
  tab: string;
  setTab: (newVal: string) => void;

  animDirection: directions;
  setAnimDirection: (newVal: directions) => void;
}

export const useInterfaceStore = create<interfaceState>()((set) => ({
  tab: "",
  setTab: (newVal) => set(() => ({ tab: newVal })),

  animDirection: "left",
  setAnimDirection: (newVal) => set(() => ({ animDirection: newVal })),
}));

export default useInterfaceStore;
