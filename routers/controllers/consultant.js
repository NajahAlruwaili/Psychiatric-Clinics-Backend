const consultantModel = require("../../db/models/consultantModel");


const getConsultant = async (req, res) => {
  try {
    const Consultant = await consultantModel.find({});
    res.status(200).json(Consultant);
  } catch (error) {
    res.send(error);
  }
};

const addConsultant = async (req, res) => {
  const {Name,specialty,aboutYou,img} = req.body;

  const newConsultant = new consultantModel({ Name,specialty,aboutYou,img });
  try {
    const consultantModel = await newConsultant.save();

    res.status(201).json(consultantModel);
  } catch (error) {
    res.send(error);
  }
};

const delConsultant = async (req, res) => {
  const id = req.params.id;
  try {
    const delet = await consultantModel.findOneAndDelete({ _id: id });

    res.status(201).json([delet , "delete"]);
  } catch (error) {
    res.send(error);
  }
};


const updateAboutYou=(req,res)=>{

}


const updateImg=(req,res)=>{

}



module.exports = { getConsultant, addConsultant, delConsultant, updateAboutYou, updateImg };
