import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts } from "../store/categories/categoryActions";
import { fetchProducts } from "../store/products/productsActions";
import PreviewProducts from "../components/PreviewProducts";

class SingleCategory extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    this.props.dispatch(fetchProducts);
    this.props.dispatch(fetchCategoryProducts(categoryId));
  }

  render() {
    if (!this.props.categoryProducts || this.props.loading) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
    const displayProducts = this.props.categoryProducts.map(prod => {
      return (
        <PreviewProducts
          key={prod.id}
          imageUrl={prod.imageUrl}
          title={prod.title}
          author={prod.author}
          prod={prod}
          price={prod.price}
          id={prod.id}
        />
      );
    });
    return (
      <div className="container categories">
        <div className="row">{displayProducts}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categoryProducts: reduxState.categories.singleCategoryProducts,
    loading: reduxState.categories.loading
  };
}

export default connect(mapStateToProps)(SingleCategory);
