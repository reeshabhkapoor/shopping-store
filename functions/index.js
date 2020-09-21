const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HST1BJWHI3TYEYta6lzCZqeoTQFyj5NcY8tQy1k6lQurLR6PHy3aLVoX7axZ1QZ4CjFfbvSjgiBD9IbxUhArtAl0063VEPOUU"
);

//API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment req", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in Subunits
    currency: "inr",
  });

  //OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/shopping-store-b8367/us-central1/api
