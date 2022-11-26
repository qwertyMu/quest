import create from "zustand";

export interface interfaceState {
  tab: string;
  setTab: (newVal: string) => void;
  drawerOpen: boolean;
  setDrawerOpen: (newVal: boolean) => void;
}

export const useInterfaceStore = create<interfaceState>()((set) => ({
  tab: "",
  setTab: (newVal) => set(() => ({ tab: newVal })),

  drawerOpen: false,
  setDrawerOpen: (newVal) => set(() => ({ drawerOpen: newVal })),
}));

export default useInterfaceStore;
