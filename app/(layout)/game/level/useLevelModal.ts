"use client";

import { create } from "zustand";

interface LevelModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLevelModal = create<LevelModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLevelModal;
