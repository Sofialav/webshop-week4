import React, { Component } from "react";
import { connect } from "react-redux";
import PreviewProducts from "./PreviewProducts";

class SearchResults extends Component {
  render() {
    console.log("search res", this.props.searchResults);
    return (
      <div>
        {this.props.searchResults.length > 0 ? (
          this.props.searchResults.map(prod => {
            return (
              <PreviewProducts
                key={prod.id}
                imageUrl={prod.imageUrl}
                title={prod.title}
                author={prod.author}
                prod={prod}
              />
            );
          })
        ) : (
          <h1>No search results</h1>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return { searchResults: reduxState.products.search };
}
export default connect(mapStateToProps)(SearchResults);
