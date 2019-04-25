import { combineReducers, createStore, applyMiddleware } from "redux";
import { characterReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

export * from "./actions";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const myMiddleware = store => next => action => {
  if (typeof action === "function") {
    const realAction = action(store.dispatch);
    next(realAction);
  }

  next(action);
};

const sagaMiddleware = createSagaMiddleware();

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers({
  character: characterReducer
});

//create the store
export const getStore = () => {
  const store = createStore(
    rootReducer,

    composeEnhancers(applyMiddleware(myMiddleware, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
