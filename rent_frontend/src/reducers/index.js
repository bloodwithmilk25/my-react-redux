import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cellsReducer from "./cellsReducer";

export default combineReducers({
  cells: cellsReducer,
  form: formReducer
});
