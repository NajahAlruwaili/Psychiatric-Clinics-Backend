const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];  // وال sign تكون نفس البصمة انها خاصة فيني 
    const valid = jwt.verify(token, "ABC");  // "الverify" تكون نفس معنى التحقق 
    req.token = valid;
    next();
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { authentication };
