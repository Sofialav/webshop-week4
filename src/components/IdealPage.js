import React from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  ElementsConsumer,
  IdealBankElement
} from "@stripe/react-stripe-js";

const ELEMENT_OPTIONS = {
  classes: {
    base: "StripeElementIdeal",
    focus: "StripeElementIdeal--focus"
  },
  style: {
    base: {
      padding: "10px 14px",
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#9e2146"
    }
  }
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", errorMessage: null, paymentMethod: null };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    const { name } = this.state;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const idealBankElement = elements.getElement(IdealBankElement);

    const payload = await stripe.createPaymentMethod({
      type: "ideal",
      billing_details: {
        name
      }
    });

    if (payload.error) {
      console.log("[error]", payload.error);
      this.setState({
        errorMessage: payload.error.message,
        paymentMethod: null
      });
    } else {
      console.log("[PaymentMethod]", payload.paymentMethod);
      this.setState({
        paymentMethod: payload.paymentMethod,
        errorMessage: null
      });
    }
  };

  render() {
    const { errorMessage, paymentMethod, name } = this.state;
    const { stripe } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          required
          placeholder="Jenny Rosen"
          value={name}
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
        />
        <label htmlFor="ideal">iDEAL Bank</label>
        <IdealBankElement id="ideal" options={ELEMENT_OPTIONS} />
        {errorMessage && <p>{errorMessage}</p>}
        {paymentMethod && <p>Got PaymentMethod: {paymentMethod.id}</p>}
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <CheckoutForm stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Ideal = () => {
  return (
    <Elements stripe={stripePromise}>
      <InjectedCheckoutForm />
    </Elements>
  );
};

export default connect()(Ideal);
