import counterReducer from "./Counter.reducer";
import { combineReducers } from "redux";
import themeReducer from "./Theme.reducers.js"; // Correct import name

const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer, // Include the theme reducer
})

export default rootReducer;

