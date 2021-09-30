// Note: createStore and candyReducer must be exported for the tests to run

//Write a function called createStore that takes in a reducer function as an argument.

export function createStore(reducer) {
  // write your createStore code here
  let state 

  //dispatch should take in an action, update the state using the reducer, and call the render function.
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  //getState should return the current state.

  function getState() {
    return state;
  }


  return {
    dispatch,
    getState,
  };

}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

// Use your createStore function and the functions provided here to create a store.
const store = createStore(candyReducer);
// Once the store is created, call an initial dispatch.
store.dispatch({ type: "@@INIT"});
