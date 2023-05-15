import { useReducer } from "react";
import { StateContext, DispatchContext } from "./context";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
