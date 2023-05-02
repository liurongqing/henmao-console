import { createContext } from "react";
import { PAGINATION } from "@/consts";

export const Store = createContext({});

export const initialState = {
  current: PAGINATION.current,
  searchQuery: {},
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
  }
  return state;
};
