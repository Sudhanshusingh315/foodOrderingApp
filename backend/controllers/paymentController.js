const Razorpay = require("razorpay");
const razprpayInstace = require("../server");
// checkout
exports.checkout = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: Number(amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  try {
    const order = await razprpayInstace.instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "failed" });
  }
};

// payment verification
exports.paymentVarification = (req, res) => {
  res.status(200).json({
    success: true,
    additionalData: req.body,
  });
};

// get key
exports.getkey = (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY });
};
