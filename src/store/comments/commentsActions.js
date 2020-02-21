export function fetchComments(dispatch) {
  fetch("http://localhost:4000/comments")
    .then(res => res.json())
    .then(data => {
      dispatch(setComment(data));
    });
}

export function setComment(comments) {
  return {
    type: "SET_COMMENTS",
    payload: comments
  };
}

export function getCommentsByProduct(productId) {
  return {
    type: "COMMENTS_BY_BOOK",
    payload: parseInt(productId)
  };
}
