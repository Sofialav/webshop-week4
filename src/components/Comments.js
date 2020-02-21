import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="media-body">
          <h3>{this.props.user} says:</h3>
          <p>{this.props.comment}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}
export default connect(mapStateToProps)(Comments);
