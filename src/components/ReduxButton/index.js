import React from "react";
import { changeCharacter } from "../../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Component one is a button
export class ReduxButton extends React.Component {
  onClick = () => {
    this.props.changeCharacter(this.props.character.id + 1);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Next Character</button>
      </div>
    );
  }
}

//map our the state's message to this property on the components
let mapStateToProps = function(state) {
  return { character: state.character };
};

//give these components access to the change message creator
let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ changeCharacter }, dispatch);
};

//Make the two components Redux Containers
export const ReduxButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxButton);
