import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="media-body">
          <h3>User</h3>
          <p>Comment</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { comment: reduxState.comments };
}
export default connect(mapStateToProps)(Comments);
