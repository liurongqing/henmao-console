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

interface ModalProps {
  isOpen: boolean;
  formData: any;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
  setFormData: (formData) => void;
}

export default create<ModalProps>((set) => ({
  isOpen: false,
  formData: { ...initialForm },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onReset: () => set({ formData: { ...initialForm } }),
  setFormData: (formData) => set({ formData: { ...formData } }),
}));
