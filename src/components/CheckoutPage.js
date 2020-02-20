import React from "react";
import { connect } from "react-redux";
class CheckoutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
      </div>
    );
  }
}
export default connect()(CheckoutPage);
