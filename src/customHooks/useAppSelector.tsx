import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ApplicationState } from "store/store";

const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default useAppSelector;
