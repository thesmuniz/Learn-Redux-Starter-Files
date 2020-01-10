// a reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes!!');
    default:
      return state;
  }
}

export default posts;