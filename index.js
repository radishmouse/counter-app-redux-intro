// Step zero, what does the state look like?
[
  {
    id: 1001,
    timestamp: 12934612973462194,
    title: 'oakley goes to the mall',
    content: 'got bored, went home'
  },
  {
    id: 1002,
    timestamp: 12934612973462194,
    title: 'milla goes to war',
    content: 'got bored, went home'
  },
]

// Step one, sketch out actions that change

// update document
{
  type: 'UPDATE_DOCUMENT',
  id: 1001,
  content: 'oakley buys pants',
  title: 'oakley goes to the mall, again'
}

// delete
{
  type: 'DELETE_DOCUMENT',
  id: 1002
}

// create document
{
  type: 'CREATE_DOCUMENT',
  content: 'oakley buys pants',
  title: 'oakley goes to the mall, again'
}

// ===== searching
// get one by title
{
  type: 'GET_DOCUMENT_BY_TITLE',
  title: 'milla'
}

{
  type: 'GET_DOCUMENT_BY_CONTENT',
  content: 'milla'
}

// get one by id
{
  type: 'GET_DOCUMENT_BY_ID',
  id: 1002
}

const documents = (state=[], action) => {
  if (!action) {
    return state;
  }

  switch(action.type) {
    case 'UPDATE_DOCUMENT':
      // copy the current state into new array
      // find the doc in the array
      // then update it
      // return new array
      break;
    case 'DELETE_DOCUMENT':
      // copy the current state into new array
      // remove it from the array
      break;
    default:
      return state;
  }
}

const store = Redux.createStore(documents);
store.subscribe(/* ... */);
