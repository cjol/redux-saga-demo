import React from "react";
import { Provider } from "react-redux";
import { getStore } from "../../store";
import { App } from "../App";

const store = getStore();

export class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
