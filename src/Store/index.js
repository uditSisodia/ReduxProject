import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type == "decrement") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type == "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = configureStore({
  reducer: counterReducer,
});

export default store;
