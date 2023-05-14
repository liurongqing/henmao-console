import { PAGINATION } from "@/consts";

export const initialState = {
  current: PAGINATION.current, // 分页
  searchQuery: {}, // 搜索条件
  refCount: 1, // 刷新系数
  isOpen: false, // modal 打开
  initialForm: {
    _id: "",
    level: 1,
    donuts: [
      { type: 1, frame: 2 },
      { type: 2, frame: 3 },
      { type: 3, frame: 9 },
    ],
    time: 60,
  },
};
