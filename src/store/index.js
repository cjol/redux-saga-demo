import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { characterReducer } from "./reducer";
import { rootSaga } from "./sagas";

// re-export our action creators so they are easier to import elsewhere
export * from "./actions";

// This is the final reducer that gets attached to our store.
const rootReducer = combineReducers({
  character: characterReducer
});

// create the store on-demand
export const getStore = () => {

  // create a middleware for redux-saga to do its magic
  // this allows redux-saga to inspect actions, and create new ones
  const sagaMiddleware = createSagaMiddleware();

  // redux can transform our _middleware_ into an _enhancer_
  const enhancer = applyMiddleware(sagaMiddleware);

  // we can create a store just like before: simply add our enhancer
  const store = createStore(rootReducer, enhancer);

  // we need to tell redux-saga to start watching actions
  sagaMiddleware.run(rootSaga);

  return store;
};
