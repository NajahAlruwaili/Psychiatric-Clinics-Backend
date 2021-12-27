const postModel = require("../../db/models/postModel");


const getpost = async (req, res) => {
  try {
    const post = await postModel.find({});
    res.status(200).json(post);
  } catch (error) {
    res.send(error);
  }
};

const addpost = async (req, res) => {
  const { post } = req.body;
  const user = req.token.userId;
  const newpost = new postModel({ post , user});
  try {
    const postModel = await newpost.save();
    res.status(201).json(postModel);
  } catch (error) {
    res.send(error);
  }
};



const deletepost = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const delet = await postModel.findOneAndDelete({ _id: id , user:user });
    res.status(201).json([delet , "delete"]);
  } catch (error) {
    res.send(error);
  }
};

// const deletepost = async (req, res) => {
//   const id = req.params.id;
//   const user = req.token.userId;
//   try {
//     const userAdmin = await userModel.findOne({_id:user})

//     if(userAdmin.admin==true){
//       const delet = await postModel.findOneAndDelete({ _id: id });
//       if (delet){
//         res.send("it is delete")
//       }else{
//         res.send("no delete")
//       }
//     } else{
//       const delet = await postModel.findOneAndDelete({ _id: id, user: user });
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



const updatePost = async (req , res) => {
  const id = req.params.id
  const { post} = req.body;
  // const user = req.token.userId;
  try {
      let postUpdate = await postModel.findByIdAndUpdate({_id: id} , {post})
      const posts = await postModel.find({})
      res.status(200).json(posts)
  } catch (error) {
      res.status(403).json(error)
  }
};







module.exports = { getpost, addpost, deletepost, updatePost };
