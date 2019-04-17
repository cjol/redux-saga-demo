import React from "react";
import { changeMessage } from "../../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Component one is a button
export class ReduxButton extends React.Component {
  onClick = e => {
    e.preventDefault();

    const newMessage = this.props.message.replace(/\d+/, d => parseInt(d) + 1);
    this.props.changeMessage(newMessage);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Press Button</button>
      </div>
    );
  }
}

//map our the state's message to this property on the components
let mapStateToProps = function(state) {
  return { message: state.message };
};

//give these components access to the change message creator
let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ changeMessage }, dispatch);
};

//Make the two components Redux Containers
export const ReduxButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxButton);
