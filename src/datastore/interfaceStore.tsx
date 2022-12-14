import create from "zustand";

export interface interfaceState {
  tab: string;
  setTab: (newVal: string) => void;
}

export const useInterfaceStore = create<interfaceState>()((set) => ({
  tab: "",
  setTab: (newVal) => set(() => ({ tab: newVal })),
}));

export default useInterfaceStore;
