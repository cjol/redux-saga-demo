# Redux Saga Guided Demo

In this guided demo, we create a minimal application which will fetch the name of a
new Star Wars character at the click of a button.

All important files have detailed comments, and I recommend that you read them in the following order:

1. [ReduxTextField](./src/components/ReduxTextField/index.js): React component with Redux state bindings
2. [ReduxButton](./src/components/ReduxButton/index.js): React component with Redux dispatch bindings
3. [Redux Actions](./src/store/actions.js): Three action creators for our asynchronous effect
4. [Redux Reducer](./src/store/reducer.js)
5. [Store Index](./src/store/index.js): Bringing everything together, including the `redux-saga` middleware
6. [Sagas](./src/store/sagas.js): Where the magic happens!
