const bcrypt= require("bcrypt");
const userModel= require("../../db/models/userModel")

const addNewUser= async (req, res)=> {
  let {UserName, Email, Pass} = req.body;
  try {
      Pass= await bcrypt.hash(Pass,10);
      const newUser= new userModel({UserName, Email, Pass});

      const res= await newUser.save();
      res.status(201).json(res);

    
  } catch (err) {
      res.send(err)
  }
};

module.exports = {addNewUser};