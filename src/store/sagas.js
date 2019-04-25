import {
  actions,
  changeCharacter,
  changeCharacterFailure,
  changeCharacterSucceed
} from "./actions";
import { all, call, put, takeEvery } from "redux-saga/effects";
import Axios from "axios";

const apiMethod = person => Axios.get("https://swapi.co/api/people/" + person);

export function* getPersonSaga(action) {
  try {
    const callInstruction = call(apiMethod, action.payload);
    const character = yield callInstruction;
    yield put(changeCharacterSucceed(character.data.name));
  } catch (e) {
    yield put(changeCharacterFailure(e));
  }
}

export function* watchGetPersonSaga() {
  const instruction = takeEvery(
    actions.CHANGE_CHARACTER_REQUEST,
    getPersonSaga
  );
  yield instruction;
}

export function* rootSaga() {
  yield all([watchGetPersonSaga()]);
}
