import { setaReducerStateInput, setaReducerStatePlanet } from "./setaReducerState";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
    setaReducerStateInputStore: setaReducerStateInput,
    setaReducerStatePlanetStore: setaReducerStatePlanet
});