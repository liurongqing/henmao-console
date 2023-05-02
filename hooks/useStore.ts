import { useContext } from "react";

export const useStore = (Store: any) => {
  const { state, dispatch }: any = useContext(Store);
  return { state, dispatch };
};
