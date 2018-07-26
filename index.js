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
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

const store = Redux.createStore(counter);

// helper function to print out the value of our counter
const render = () => {
  let value = store.getState();
  console.log(value);
};

store.subscribe(render);



