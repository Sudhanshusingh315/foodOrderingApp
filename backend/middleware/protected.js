const jwt = require("jsonwebtoken");
// middleware for protection
function protected(req, res, next) {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    if (!token) {
      throw new Error("Not Authorized, Login");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
}

module.exports = protected;
