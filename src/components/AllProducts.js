import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/productsActions";
import PreviewProducts from "./PreviewProducts";

class AllProducts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  render() {
    const displayProducts = this.props.products.map(prod => {
      return (
        <PreviewProducts
          key={prod.id}
          imageUrl={prod.imageUrl}
          title={prod.title}
          author={prod.author}
          prod={prod}
        />
      );
    });

    return (
      <div>
        <h1>All Books</h1>
        <div className="container">
          <div className="row">{displayProducts}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products.products };
}
export default connect(mapStateToProps)(AllProducts);
