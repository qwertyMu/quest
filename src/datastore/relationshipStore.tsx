import create from "zustand";

export type Entity = {
  name: string;
};

export interface relationshipState {
  entities: Entity[];
  addEntity: (newVal: Entity) => void;
  clearEntities: () => void;
}

export const useRelationshipStore = create<relationshipState>()((set) => ({
  entities: [],
  addEntity: (newVal) =>
    set((state) => ({ entities: [...state.entities, newVal] })),
  clearEntities: () => set({ entities: [] }),
}));

export default useRelationshipStore;
