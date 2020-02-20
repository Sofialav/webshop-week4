import React from "react";
import { connect } from "react-redux";
class CheckoutPage extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    // TODO
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            E-mail{" "}
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Password{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <p>Not a member yet?</p>
        <p>
          <button>Register now</button>
        </p>
      </div>
    );
  }
}
export default connect()(CheckoutPage);
