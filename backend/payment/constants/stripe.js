const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_test_51IAcqYDle1Cl217pUm0JffNfzQpmJuLiF0xPNLUztDZswpDd3KSYpYRBZQH5rsaPBp3I3RxCF3wJwmuAzVeecGbo00qyTImsse"
    : "sk_test_51IAcqYDle1Cl217pUm0JffNfzQpmJuLiF0xPNLUztDZswpDd3KSYpYRBZQH5rsaPBp3I3RxCF3wJwmuAzVeecGbo00qyTImsse";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
