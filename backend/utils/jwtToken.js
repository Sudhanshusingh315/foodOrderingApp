const jwt = require("jsonwebtoken");
exports.generatingToken = async(userCredentials) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(userCredentials, process.env.JWT_SECRET, { expiresIn: "2d" });
    resolve(token);
  });
};
