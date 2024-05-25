const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  userEmail: { type: String, required: true },
  contact: { type: Number, required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
