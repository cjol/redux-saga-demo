import { combineReducers, createStore } from "redux";
import { messageReducer } from "./reducer";
export * from "./actions";

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers({
  message: messageReducer
});

//create the store
export const getStore = () => createStore(rootReducer);
