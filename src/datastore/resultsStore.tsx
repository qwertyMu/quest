import create from "zustand";

export type Attribution = {
  pk: string;
  sk: string;
  case_ref: string;
  exhibit_ref: string;
  device_uid: string;
  file_hash: string;
  organisation: string;
  datetime_added: string;
  datetime: string;

  name: string;
  attribution: string;
};

export type Interaction = {
  pk: string;
  sk: string;
  case_ref: string;
  exhibit_ref: string;
  device_uid: string;
  file_hash: string;
  organisation: string;
  datetime_added: string;
  datetime: string;

  local_partner: string;
  interaction: string;
  direction: string;
  duration: string;
  status: string;
};

export type PreviousSearch = {
  pk: string;
}

export interface resultsState {
  attributions: Attribution[];
  attributionCount: Number;
  setAttributionCount: (newVal: Number) => void;
  setAttributions: (newVal: Attribution[]) => void;

  interactions: Interaction[];
  interactionCount: Number;
  setInteractionCount: (newVal: Number) => void;
  setInteractions: (newVal: Interaction[]) => void;

  previousSearches: PreviousSearch[];
  previousSearchesCount: Number;
  setPreviousSearchesCount: (newVal: Number) => void;
  setPreviousSearches: (newVal: PreviousSearch[]) => void;

  clear: () => void;
}

export const useResultsStore = create<resultsState>()((set) => ({
  attributions: [],
  attributionCount: 0,
  setAttributionCount: (newVal) => set(() => ({ attributionCount: newVal })),
  setAttributions: (newVal) => set(() => ({ attributions: newVal })),

  interactions: [],
  interactionCount: 0,
  setInteractionCount: (newVal) => set(() => ({ interactionCount: newVal })),
  setInteractions: (newVal) => set(() => ({ interactions: newVal })),

  previousSearches: [],
  previousSearchesCount: 0,
  setPreviousSearchesCount: (newVal) => set(() => ({ previousSearchesCount: newVal })),
  setPreviousSearches: (newVal) => set(() => ({ previousSearches: newVal })),

  clear: () => set({ attributions: [], interactions: [], previousSearches: [] }),
}));

export default useResultsStore;
