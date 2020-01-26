function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      // We need to return the new state without the delected comment
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.i),
        // After the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overtite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;