import { useContext } from "react";
import { StateContext, DispatchContext } from "./context";

export const useStore = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);
