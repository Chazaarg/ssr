import { combineReducers } from "redux";
import sesionReducer from "./sesionReducer";
export default combineReducers({
  sesion: sesionReducer
});
