import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategoryProducts } from "../store/categories/categoryActions";
import PreviewCategory from "../components/PreviewCategory";

class SingleCategory extends Component {
  componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    console.log("Now let's fetch this category:", categoryId);
    this.props.dispatch(fetchCategoryProducts(categoryId));
  }

  render() {
    if (!this.props.categoryProducts) {
      return <div>Loading</div>;
    }
    const displayProducts = this.props.categoryProducts.map(category => {
      return (
        <PreviewCategory
          id={category.id}
          src={category.imageUrl}
          genre={category.title}
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
