import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import STRIPE_PUBLISHABLE from "./constants/stripe";
import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "EUR";

const fromDollarToCent = (amount) => parseInt(amount * 100);

const successPayment = (data) => {
  console.log(data);
  alert("Payment Successful");
};

const errorPayment = (data) => {
  alert("Payment Error");
};

const onToken = (amount, description) => (token) =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount),
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={
      "pk_test_51IAcqYDle1Cl217pMufz4egXcGPGMG2Ooko3tiOqf60DtUEz7ujPSkDfPbmga6qvel7NbmK9S0o5rOtfj8pSsbWq00vW0qtt4U"
    }
    zipCode
    email
    allowRememberMe
  />
);

export default Checkout;
