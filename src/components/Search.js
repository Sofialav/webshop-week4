import React, { Component } from "react";
import { connect } from "react-redux";
import { searchByTitle } from "../store/products/productsActions";

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
    this.props.dispatch(searchByTitle(this.state.input));
  };
  render() {
    return (
      <div>
        <form className="form-inline">
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="input"
            className="form-control m` kš13t4'r-sm-2"
            type="search"
            placeholder="Search by title"
            aria-label="Search"
          ></input>
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-success my-2 my-sm-0"
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

export default connect(mapStateToProps)(Search);
