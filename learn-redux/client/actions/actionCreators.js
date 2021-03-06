// increment a like
export function increment(index) {
  return {
    type: 'INCREMEMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log('Dispaching')
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}