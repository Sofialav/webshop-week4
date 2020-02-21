import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class ContactForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.typePayment.contact.values.paymentMethod === "creditCard") {
      return this.props.history.push("/creditCard");
    } else {
      return this.props.history.push("/iDeal");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} action="CheckoutPage.js">
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="adress">Address</label>
          <Field name="address" component="input" type="text" />
        </div>
        <div>
          <label>Payment Method</label>
          <div>
            <Field
              name="paymentMethod"
              className="btn disabled"
              component="select"
            >
              <option value="iDeal">iDeal</option>
              <option value="creditCard">CreditCard</option>
            </Field>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactForm);

function mapStateToProps(reduxState) {
  return {
    typePayment: reduxState.form
  };
}

export default connect(mapStateToProps)(ContactForm);
