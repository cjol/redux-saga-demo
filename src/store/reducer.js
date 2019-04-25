import { actions } from "./actions";

//Our reducer
export const characterReducer = function(state = { id: 0, name: "" }, action) {
  switch (action.type) {
    case actions.CHANGE_CHARACTER_REQUEST:
      return { id: state.id + 1, name: "Loading..." };
    case actions.CHANGE_CHARACTER_SUCCEED:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
