import { actions } from "./actions";

const initialState = "Message number 1!";

//Our reducer
export const messageReducer = function(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
