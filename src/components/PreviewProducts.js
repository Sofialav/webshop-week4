import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PreviewCategory extends Component {
  render() {
    return (
      <div className="col-sm-4 prod-margin">
        <div key={this.props.id} className="prodPreview">
          <img src={this.props.imageUrl} className="mr-3" />
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-danger disabled">
              Add to Cart
            </button>
            <button type="button" className="btn btn-warning disabled">
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {};
}

export default connect(mapStateToProps)(PreviewCategory);

const displayProducts = this.props.products.map(prod => {
  return (
    <PreviewProducts
      key={prod.id}
      imageUrl={prod.imageUrl}
      title={prod.title}
      author={prod.author}
    />
  );
});
