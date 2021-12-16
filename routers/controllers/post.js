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

  const newpost = new postModel({ post });

  try {
    const postModel = await newpost.save();

    res.status(201).json(postModel);
  } catch (error) {
    res.send(error);
  }
};

const deletepost = async (req, res) => {
  const id = req.params.id;
  try {
    
    const delet = await postModel.findOneAndDelete({ _id: id });

    res.status(201).json([delet , "delete"]);
  } catch (error) {
    res.send(error);
  }
};






module.exports = { getpost, addpost, deletepost };
