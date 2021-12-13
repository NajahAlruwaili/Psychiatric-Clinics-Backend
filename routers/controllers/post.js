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

  const newpost = new postModel({ post, user });

  try {
    const postModel = await newpost.save();

    res.status(201).json(postModel);
  } catch (error) {
    res.send(error);
  }
};

const deletpost = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const del = await postModel.findOneAndDelete({ _id: id, user: user });

    res.status(201).json([del, "delete"]);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getpost, addpost, deletpost };
