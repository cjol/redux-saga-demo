export const actions = {
  CHANGE_MESSAGE: "change_message"
};

//This is the Action Creator
export const changeMessage = message => ({
  type: actions.CHANGE_MESSAGE,
  payload: message
});
