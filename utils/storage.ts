export const storage = {
  getItem(key: string) {
    const data: any = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },
  setItem(key: string, value: any) {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
  },
  removeItem(key: string) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
