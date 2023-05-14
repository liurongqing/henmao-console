import { initialState } from "./initialState";

export const reducer = (state: any, action: any) => {
  // console.log("action", action);
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
      const { _id, level, donuts, time } = action.data;
      return {
        ...state,
        initialForm: {
          _id,
          level,
          donuts,
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
