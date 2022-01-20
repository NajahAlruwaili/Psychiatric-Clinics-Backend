const userModel = require("../../db/models/userModel");


const getLike= async(req,res)=>{
const user = req.token.userId;
try {
    const likeVid = await userModel
    .findOne({_id:user})
    .populate("favorite");    //  انه ينقلني لصفحة التفضيلات مع البيانات الاولى نفسها 
    res.status(200).json (likeVid.favorite)
    
} catch (error) {
    res.send(reeor);
}
};

const addLike = async (req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
        const likeNewVid = await userModel.findOneAndUpdate(
            {_id: user},
            {$push: {favorite:id}},
            {new: true});
        res.status(201).json(likeNewVid);
    } catch (error) {
        res.send(error)
    }
};

const deletLike = async (req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
        const removeFav = await userModel.findOneAndUpdate(
            {_id: user},
            {$pull: {favorite:id}});
        res.status(201).json(removeFav);
    } catch (error) {
        res.send(error);
    }
};





module.exports = {getLike ,addLike ,deletLike };