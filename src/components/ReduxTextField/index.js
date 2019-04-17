import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Second component is a text field
export class ReduxTextField extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

//map our the state's message to this property on the components
let mapStateToProps = function(state) {
  return { message: state.message };
};

//Make the two components Redux Containers
export const ReduxTextFieldConnected = connect(
  mapStateToProps,
  null
)(ReduxTextField);
