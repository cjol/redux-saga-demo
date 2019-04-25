import { actions } from "./actions";

// The redux state is simple - we only store the name and ID of the character
const initialState = { id: 0, name: "" };

// Our character reducer should respond to all character-related actions
export const characterReducer = function(state = initialState, action) {
  switch (action.type) {

    // The success case is most familar - simply add the name to the state
    case actions.CHANGE_CHARACTER_SUCCEED:
      return { ...state, name: action.payload };

    // We also need to update the state when the user first requests a character
    // this allows us to display a loading message, and make an optimistic update of the ID
    case actions.CHANGE_CHARACTER_REQUEST:
      return { id: state.id + 1, name: "Loading..." };

    // Finally, we can also display a relevant message for the user when an error occurs
    case actions.CHANGE_CHARACTER_FAIL:
      return { id: -1, name: "An error occurred" };

    default:
      return state;
  }
};
