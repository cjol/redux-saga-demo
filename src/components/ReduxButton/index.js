import React from "react";
import { changeCharacter } from "../../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Component two is a button to fetch the next character
export class ReduxButton extends React.Component {
  onClick = () => {
    this.props.changeCharacter(this.props.character.id + 1);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Get Character</button>
      </div>
    );
  }
}

// map the character in the state to a property on the button
// this is needed so we know what the currency character's ID is
let mapStateToProps = function(state) {
  return { character: state.character };
};

// give the component access to the change character action
let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ changeCharacter }, dispatch);
};

// Make the component into a redux container
export const ReduxButtonConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxButton);
