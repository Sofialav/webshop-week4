import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/productsActions";

class AllProducts extends Component {
  componentDidMount() {
    console.log("compDidMount");
    this.props.dispatch(fetchProducts);
  }
  render() {
    return (
      <div>
        AllProducts
        <div>
          {this.props.products.map(prod => {
            return <div key={prod.id}>{prod.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products };
}
export default connect(mapStateToProps)(AllProducts);
