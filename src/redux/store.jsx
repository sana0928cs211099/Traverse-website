// store.js
import { createStore } from 'redux';

// Define your initial state
const initialState = {
  counter: 0,
};

// Define your reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// Create the store
const store = createStore(counterReducer);

export default store;