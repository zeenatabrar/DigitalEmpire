import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { ProductReducer } from "./Product/reducer";
import thunk from "redux-thunk"
const rootReducer=combineReducers({
   ProductReducer,
})
export const store=legacy_createStore(rootReducer, applyMiddleware(thunk))