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

// const postvideo = async (req, res) => {
//   const { description, video } = req.body;
//   const user = req.token.userId;
//   const newvideo = new videoModel({ description, video , user })
//   try {
//     const userAdmin = await userModel.find();

//     if(userAdmin.admin==true){
//       const video = await newvideo.save();
//       if (video){
//         res.send("it is add")
//       }else{
//         res.send("no add")
//       }
//     } else{
//       const video = await newvideo.save();
//       if (video){
//         res.send("it is add")
//       }else{
//         res.send("noo add")
//       }    
//     }
//   } catch (error) {
//     res.send(error , "error");
//   }
// };



const deletevideo = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const delet = await videoModel.findOneAndDelete({ _id: id , user:user});
    res.status(200).json([delet, "delete"]);
  } catch (error) {
    res.send(error);
  }
};

// const deletevideo = async (req, res) => {
//   const id = req.params.id;
//   const user = req.token.userId;
//   try {
//     const userAdmin = await userModel.findOne({_id:user})

//     if(userAdmin.admin==true){
//       const delet = await videoModel.findOneAndDelete({ _id: id });
//       if (delet){
//         res.send("it is delete")
//       }else{
//         res.send("no delete")
//       }
//     } else{
//       const delet = await videoModel.findOneAndDelete({ _id: id, user: user });
//       if (delet){
//         res.send("it is delete")
//       }else{
//         res.send("noo delete")
//       }    
//     }
//   } catch (error) {
//     res.send(error , "error");
//   }
// };






module.exports = { getvideo, postvideo, deletevideo };