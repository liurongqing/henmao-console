"use client";

import { create } from "zustand";

const initialForm = {
  _id: "",
  level: 1,
  donuts: [
    { type: 1, frame: 2, num: 15 },
    { type: 2, frame: 3, num: 15 },
    { type: 3, frame: 4, num: 15 },
  ],
  time: 120,
};

interface LevelModalStore {
  isOpen: boolean;
  formData: any;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
  setFormData: (formData) => void;
}

const useLevelModal = create<LevelModalStore>((set) => ({
  isOpen: false,
  formData: { ...initialForm },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onReset: () => set({ formData: { ...initialForm } }),
  setFormData: (formData) => set({ formData: { ...formData } }),
}));

export default useLevelModal;
