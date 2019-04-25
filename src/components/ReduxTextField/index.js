import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Component one is a text field
export class ReduxTextField extends React.Component {
  render() {
    return <div>{this.props.character.name}</div>;
  }
}

// map the name of the character to the text field
let mapStateToProps = function(state) {
  return { character: state.character };
};

// connect the text field to the redux state
export const ReduxTextFieldConnected = connect(
  mapStateToProps,
  null
)(ReduxTextField);
