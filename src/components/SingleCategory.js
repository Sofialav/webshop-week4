import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts } from "../store/categories/categoryActions";
import PreviewProducts from "../components/PreviewProducts";

class SingleCategory extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    this.props.dispatch(fetchCategoryProducts(categoryId));
  }

  render() {
    if (!this.props.categoryProducts) {
      return <div>Loading</div>;
    }
    const displayProducts = this.props.categoryProducts.map(prod => {
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
      <div className="container categories">
        <div className="row">{displayProducts}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categoryProducts: reduxState.categories.singleCategoryProducts
  };
}

export default connect(mapStateToProps)(SingleCategory);
