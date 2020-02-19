import React, { Component } from "react";
import { connect } from "react-redux";

class PreviewCategory extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.src} alt="" />
          <h1>{this.props.genre}</h1>
          <button> See more</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(PreviewCategory);
