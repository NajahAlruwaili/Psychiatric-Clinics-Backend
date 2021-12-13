const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");


const login = async (req, res) => {
  let { Email, Pass } = req.body;

  try {
    const user = await userModel.findOne({ Email: Email });
    if (user) {
      const chek = await bcrypt.compare(Pass, user.Pass);

      if (chek === true) {
        const payload = { userId: user._id, UserName: user.name };
        const token = jwt.sign(payload,"ABC");

        res.status(200).json({token});

      } else {
        res.status(403).json("wrong Pass!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };