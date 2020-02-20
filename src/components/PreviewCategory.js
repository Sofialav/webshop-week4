import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PreviewCategory extends Component {
  render() {
    return (
      <div className="col-lg-3 col-sm-6 contentBlock">
        <div>
          <img src={this.props.src} alt="" />

          <h1>{this.props.genre}</h1>
          <Link to={`/category/${this.props.id}`}>
            <button> See more</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(PreviewCategory);
