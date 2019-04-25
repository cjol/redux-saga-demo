export const actions = {
  CHANGE_CHARACTER_REQUEST: "change_character/request",
  CHANGE_CHARACTER_SUCCEED: "change_character/success",
  CHANGE_CHARACTER_FAIL: "change_character/failure"
};

// These are our action creators
export const changeCharacter = message => ({
  type: actions.CHANGE_CHARACTER_REQUEST,
  payload: message
});

export const changeCharacterSucceed = payload => ({
  type: actions.CHANGE_CHARACTER_SUCCEED,
  payload
});

export const changeCharacterFailure = payload => ({
  type: actions.CHANGE_CHARACTER_FAIL,
  payload
});
