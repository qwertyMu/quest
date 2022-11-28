import create from "zustand";

export type Attribution = {
  name: string;
};

export interface resultsState {
  attributions: Attribution[];
  attributionCount: Number;
  setAttributions: (newVal: Attribution[]) => void;

  clear: () => void;
}

export const useResultsStore = create<resultsState>()((set) => ({
  attributions: [],
  attributionCount: 0,
  setAttributions: (newVal) => set(() => ({ attributions: newVal })),
  clear: () => set({ attributions: [] }),
}));

export default useResultsStore;
