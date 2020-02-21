import React from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  ElementsConsumer
} from "@stripe/react-stripe-js";
import "./CheckoutPage.css";

const ELEMENT_OPTIONS = {
  style: {
    base: {
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

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      postal: "",
      errorMessage: null,
      paymentMethod: null
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { stripe, elements } = this.props;
    const { name, postal } = this.state;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
        address: {
          postal_code: postal
        }
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
    const { stripe } = this.props;
    const { postal, name, paymentMethod, errorMessage } = this.state;

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
        <br />
        <label htmlFor="cardNumber">Card Number</label>
        <br />
        <CardNumberElement id="cardNumber" options={ELEMENT_OPTIONS} />
        <br />
        <label htmlFor="expiry">Card Expiration</label>
        <br />
        <CardExpiryElement id="expiry" options={ELEMENT_OPTIONS} />
        <br />
        <label htmlFor="cvc">CVC</label>
        <br />
        <CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />
        <br />
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          required
          placeholder="12345"
          value={postal}
          onChange={event => {
            this.setState({ postal: event.target.value });
          }}
        />
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
      <CheckoutPage stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const StipeCheckout = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

export default connect()(StipeCheckout);
