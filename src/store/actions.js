// Three actions are required: one for the initial request,
// and one each for the success and fail cases
export const actions = {
  CHANGE_CHARACTER_REQUEST: "CHANGE_CHARACTER/REQUEST",
  CHANGE_CHARACTER_SUCCEED: "CHANGE_CHARACTER/SUCCESS",
  CHANGE_CHARACTER_FAIL: "CHANGE_CHARACTER/FAILURE"
};

// We use action creator functions rather than manually creating action objects.
// This reduces the risk of typos or forgetting action properties.
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
