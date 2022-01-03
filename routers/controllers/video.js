const videoModel= require("../../db/models/videoModel")



const getvideo = async (req,res)=>{
    try {
      const video = await videoModel.find({});
      res.status(200).json(video);
    } catch (error){
      res.send(error)
    }
};

const postvideo= async (req, res)=>{
    const { description, video } = req.body;
    const user = req.token.userId;
    const newvideo = new videoModel({ description, video , user })
    try {
      const savedvideo = await newvideo.find()
      const video = await newvideo.save();
      res.status(200).json(video)
    }catch (error){
        res.send(error)
    }
};


const deletevideo = async (req, res) => {
  const id = req.params.id;
  try {
    const delet = await videoModel.findOneAndDelete({ _id: id });
    res.status(200).json([delet, "delete"]);
  } catch (error) {
    res.send(error);
  }
};






module.exports = { getvideo, postvideo, deletevideo };