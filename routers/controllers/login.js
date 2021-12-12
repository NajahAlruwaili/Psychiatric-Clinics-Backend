const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");


const login = async (req, res) => {
  let { Email, pass } = req.body;

  try {
    const user = await userModel.findOne({ Email: Email });
    if (user) {
      const chek = await bcrypt.compare(pass, user.pass);

      if (chek === true) {
        const payload = { userId: user._id, userName: user.name };
        const token = jwt.sign(payload,"ABC");

        res.status(200).json({token});

      } else {
        res.status(403).json("wrong pass!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };