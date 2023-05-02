import { createContext } from "react";
import { PAGINATION } from "@/consts";

export const Store = createContext({});

export const initialState = {
  current: PAGINATION.current, // 分页
  searchQuery: {}, // 搜索条件
  refCount: 1, // 刷新系数
  isOpen: false, // modal 打开
  initialForm: {
    _id: "",
    level: 1,
    type: 1,
    frame: 1,
    time: 60,
  },
};

export const reducer = (state: any, action: any) => {
  console.log("action", action);
  switch (action.type) {
    case "setCurrent": {
      return { ...state, ...action.data };
    }
    case "setSearchQuery": {
      return { ...state, searchQuery: { ...action.data } };
    }
    case "open": {
      return { ...state, isOpen: true };
    }
    case "close": {
      return { ...state, isOpen: false };
    }
    case "setFormData": {
      const { _id, level, type, frame, time } = action.data;
      return {
        ...state,
        initialForm: {
          _id,
          level,
          type,
          frame,
          time,
        },
      };
    }
    case "reset": {
      return {
        ...state,
        initialForm: {
          ...initialState.initialForm,
        },
      };
    }
    case "refresh": {
      return {
        ...state,
        current: 1,
        refCount: state.refCount + 1,
      };
    }
  }
  return state;
};
