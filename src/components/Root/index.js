import React from "react";
import { Provider } from "react-redux";
import { getStore } from "../../store";
import { App } from "../App";
import { hot } from "react-hot-loader/root";

const store = getStore();

class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export const Root = hot(RootComponent);
