import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/productsActions";
import "./AllProducts.css";

class AllProducts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  render() {
    return (
      <div>
        AllProducts
        <div className="container">
          <div className="row">
            {this.props.products.map(prod => {
              return (
                <div className="col">
                  <div key={prod.id} className="prodPreview">
                    <img src={prod.imageUrl} className="mr-3" />
                    <h3>{prod.title}</h3>
                    <p>{prod.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products };
}
export default connect(mapStateToProps)(AllProducts);
