import React from "react";
import { ReduxButtonConnected } from "../ReduxButton";
import { ReduxTextFieldConnected } from "../ReduxTextField";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ReduxTextFieldConnected />
        <ReduxButtonConnected />
      </div>
    );
  }
}
