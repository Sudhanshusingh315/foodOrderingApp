const Razorpay = require("razorpay");
const razprpayInstace = require("../server");
const {
    validateWebhookSignature,
} = require("razorpay/dist/utils/razorpay-utils");
const Payment = require("../models/paymentsModel");
const User = require("../models/userModel");
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
        console.log("meow", err);
        res.json({ success: false, message: "failed" });
    }
};
const arr = [];
// payment verification
exports.paymentVarification = async (req, res) => {
    const key = "meow";
    const message = req.body;
    const received_signature = req.headers["x-razorpay-signature"];
    const schemaData = new Promise((resolve, reject) => {
        const {
            payload: {
                payment: {
                    entity: { id },
                },
            },
        } = message;
        const {
            payload: {
                payment: {
                    entity: { order_id },
                },
            },
        } = message;
        const {
            payload: {
                payment: {
                    entity: { email },
                },
            },
        } = message;
        const {
            payload: {
                payment: {
                    entity: { contact },
                },
            },
        } = message;
        const obj = { id, order_id, email, contact };
        resolve(obj);
    });
    arr.push(req.headers["x-razorpay-event-id"]);

    validateWebhookSignature(JSON.stringify(message), received_signature, key);
    if (validateWebhookSignature) {
        console.log("first");
        const { id, order_id, email, contact } = await schemaData;

        try {
            if (req.body.event === "order.paid") {
                await Payment.create({
                    paymentId: id,
                    orderId: order_id,
                    userEmail: email,
                    contact: contact,
                });
                res.status(200);
                res.send("working");
            }
            if (req.body.event === "payment.captured") {
                res.status(200);
            }
            if (req.body.event === "payment.failed") {
                res.status(200);
                console.log("payment failed");
            }
        } catch (err) {
            console.log(err.message);
            res.status(200);
            res.send("didn't work");
        }
    } else {
        console.log("didn't work");
        res.status(200);
    }
};

// get key
exports.getkey = (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_KEY });
};
