import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/categories/categoryActions";
import PreviewCategory from "./PreviewCategory";

import "./Homepage.css";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    if (!this.props.categories) {
      return <div>Loading</div>;
    }
    const displayCategories = this.props.categories.map(category => {
      return (
        <PreviewCategory
          id={category.id}
          src={category.imageUrl}
          genre={category.name}
        />
      );
    });
    console.log("HI", this.props.categories);
    return (
      <div className="container categories">
        <div className="row">{displayCategories}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories.categoriesDetails
  };
}

export default connect(mapStateToProps)(Homepage);
