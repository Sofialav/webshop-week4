import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  searchByTitle
} from "../store/products/productsActions";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(fetchProducts);
    this.props.dispatch(searchByTitle(this.state.input));
    this.props.history.push("/products/searched");
  };
  render() {
    return (
      <div>
        <form className="form-inline mt-0 mb-0">
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="input"
            className="form-control my-2 mx-2 r-sm-2"
            type="search"
            placeholder="Search by title"
            aria-label="Search"
          ></input>
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-dark my-2 "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return { products: reduxState.products };
}

export default connect(mapStateToProps)(withRouter(Search));
