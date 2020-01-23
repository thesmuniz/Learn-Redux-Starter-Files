// a reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMEMENT_LIKES':
      console.log('Incrementing Likes')
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
      default:
        return state;
  }
}

export default posts;