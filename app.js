// const express = require("express");
// const app = express();
// require("./db/db.js");
// const courseModel= require("./db/models/courseModel")
// const cors = require("cors")
// app.use(express.json());
// app.use(cors())




// app.get("/", (req, res) => {
//   res.status(200).json("hello from my app");
// });


// app.get("/courses",async (req,res)=>{
//     try {
//          const courses = await courseModel.find({});
//         res.status(200).json(courses)
//     } catch (error){
//         res.send(error)
//     }
   

// })

// app.post("/course",async (req, res)=>{
//     const { newName, newDescription, newImg } = req.body;
//     const newCourse = new courseModel({name:newName, description:newDescription, img:newImg})
//     try {
//         const savedCourse = await newCourse.save()
//          const courses = await courseModel.find({});
//         res.status(200).json(courses)

//     }catch (error){
//         res.send(error)
//     }
// })

// app.delete("/course/:id",async (req,res)=>{
//     const id= req.params.id;
//     try {
//     const course= await courseModel.findOneAndDelete({_id:id});
//     res.status(200).json(course)
//     } catch(error){
//         res.send(error)
//     }
// })


// const Port = 5000;
// app.listen(Port, () => {
//   console.log("server is running");
// });
