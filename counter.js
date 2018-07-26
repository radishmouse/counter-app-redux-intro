// First, sketch out your actions
// ACTIONS: must be objects, must have a 'type' property
{ type: 'INCREMENT' }

// {
//   type: 'DECREMENT'
// }

// Then write reducers that handle those actions
// REDUCERS: must be functions, and must accept two arguments:
// - the current "state" (in our counter, it's a number: 0)
// - an action that tells the reducer how to calculate the new state
const counter = (state=0, action) => {
  if (!action) {
    return state;
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

// The Store is an object that manages your state
// using the reducer function that you give it.
const store = Redux.createStore(counter, 5);

// Stores have 3 methods:
// - getState: what is the current value of state?
// - dispatch: what do you want to happen to the state?
// - subscribe: what function should be called when state changes?


// helper function to print out the value of our counter
const render = () => {
  let value = store.getState();
  console.log(value);
};

store.subscribe(render);



