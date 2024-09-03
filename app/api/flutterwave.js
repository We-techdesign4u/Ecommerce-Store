import Stripe from "stripe";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const flw = new useFlutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
);

// const config = {
//     public_key: "FLWPUBK_TEST-e7c8f332b9d34b01b958cf4f4f643018-X",
//     tx_ref: Date.now(),
//     amount: amount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: email,
//       phone_number: phone,
//       name: name,
//     },
//     customizations: {
//       title: "my Payment Title",
//       description: "Payment for items in cart",
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };

// const handleFlutterPayment = useFlutterwave(config);

const axios = require("axios");

try {
  const response = await axios.post(
    "https://api.flutterwave.com/v3/payments",
    {
      tx_ref: "UNIQUE_TRANSACTION_REFERENCE",
      amount: "7500",
      currency: "NGN",
      redirect_url: "https://example_company.com/success",
      customer: {
        email: "developers@flutterwavego.com",
        name: "Flutterwave Developers",
        phonenumber: "09012345678",
      },
      customizations: {
        title: "Flutterwave Standard Payment",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
} catch (err) {
  console.error(err.code);
  console.error(err.response.data);
}
