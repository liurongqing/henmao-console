"use client";

import { create } from "zustand";

const initialForm = {
  _id: "",
  username: "",
  password1: "",
  password2: "",
  nickname: "",
  avatarUrl: "",
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
