"use client";

import { create } from "zustand";

const initialForm = {
  _id: "",
  level: 1,
  donuts: [
    { type: 1, frame: 2 },
    { type: 2, frame: 3 },
    { type: 3, frame: 4 },
  ],
  time: 120,
};

interface LevelModalStore {
  isOpen: boolean;
  formData: any;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
}

const useLevelModal = create<LevelModalStore>((set) => ({
  isOpen: false,
  formData: { ...initialForm },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onReset: () => set({ formData: { ...initialForm } }),
}));

export default useLevelModal;