const bcrypt= require("bcrypt");
const userModel= require("../../db/models/userModel")

const addNewUser= async (req, res)=> {
  let {userName, Email, pass} = req.body;
  try {
      pass= await bcrypt.hash(pass,10);
      const newUser= new userModel({userName, Email, pass});

      const res= await newUser.save();
      res.status(201).json(res);

    
  } catch (err) {
      res.send(err)
  }
};

module.exports = {addNewUser};