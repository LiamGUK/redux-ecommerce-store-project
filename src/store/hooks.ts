import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { type AppDispatch, type RootState } from "./store";

type DispatchFunction = () => AppDispatch;

// Export own versions of custom redux hooks to include Types needed for TS to understand what each hook does
export const useCartDispatch: DispatchFunction = useDispatch;

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
