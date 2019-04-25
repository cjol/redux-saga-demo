import axios from "axios";
import {
  actions,
  changeCharacterFailure,
  changeCharacterSucceed
} from "./actions";

// redux-saga provides a whole suite of "effects".
// For our demo, we can get by with only three:
import {
  takeEvery, // create a saga each time an action matches a given pattern
  call,      // create an effect description to call a given function with given arguments
  put        // create an effect description to trigger a new redux action
} from "redux-saga/effects";

// Our API is easy to call - just make a GET request
const apiMethod = id => axios.get("https://swapi.co/api/people/" + id);

// Define our character saga. Note the * which turns the function into a _generator_
export function* characterSaga(action) {
  try {

    // First we create an effect description, instructing redux-saga to call our API
    // Function with the action payload as parameter
    const callInstruction = call(apiMethod, action.payload);

    // We use "yield" to hand over our description to redux-saga.
    // Execution of the function is paused until redux-saga has completed the effect.
    // For the "call" effect, the function will resume after the API method resolves
    const character = yield callInstruction;

    // Once the API method has resolved, we instruct redux-saga to trigger a new redux action
    // For the "put" instruction, the saga function will resume immediately
    yield put(changeCharacterSucceed(character.data.name));

    // Sometimes, redux-saga will encounter an error while calling our API method.
    // The error will be re-thrown, allowing us to catch it in our saga function
  } catch (e) {

    // When an error is thrown, we instruct redux-saga to trigger the failure action
    yield put(changeCharacterFailure(e));
  }
}

// The root saga would normally call multiple sagas, but our demo only needs onej
export function* rootSaga() {
  // Finally, we create an instruction telling redux-saga to watch the stream of redux actions.
  // When an action matching CHANGE_CHARACTER_REQUEST, the character saga is started.
  const instruction = takeEvery(
    actions.CHANGE_CHARACTER_REQUEST,
    characterSaga
  );

  // As with all other effect descriptions, we hand it to redux-saga with "yield"
  yield instruction;
}
