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
