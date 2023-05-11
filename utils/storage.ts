"use client";

export const storage = {
  getItem(key: string) {
    const data: any =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },
  setItem(key: string, value: any) {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    typeof window !== "undefined" && localStorage.setItem(key, data);
  },
  removeItem(key: string) {
    typeof window !== "undefined" && localStorage.removeItem(key);
  },
  clear() {
    typeof window !== "undefined" && localStorage.clear();
  },
};
