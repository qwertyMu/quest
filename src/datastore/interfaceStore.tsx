import create from "zustand";

export interface uiState {
  tab: string;
  setTab: (newVal: string) => void;
}

export const useInterfaceStore = create<uiState>()((set) => ({
  tab: "",
  setTab: (newVal) => set(() => ({ tab: newVal })),
}));

export default useInterfaceStore;
