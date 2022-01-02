const masegeModel = require("../../db/models/masegeModel");


const getMasege = async (req, res) => {
  try {
    const masege = await masegeModel.find({});
    res.status(200).json(masege);
  } catch (error) {
    res.send(error);
  }
};

const sendMasege = async (req, res) => {

  const {Names ,EmailMsgs ,PhoneMsgs ,DoctorNames ,Titles ,MasgeIss } = req.body;
  const user = req.token.userId;
  // console.log({Names ,EmailMsgs ,PhoneMsgs ,DoctorNames ,Titles ,MasgeIss } )
  try {
  const newMasege = new masegeModel({Names ,EmailMsgs ,PhoneMsgs ,DoctorNames ,Titles ,MasgeIss, user });

    const masegeModels = await newMasege.save();
    res.status(200).json(masegeModels);
    // console.log(masegeModels);
  } catch (error) {
    res.send(error);
  }
};



module.exports = { getMasege,
 sendMasege };
