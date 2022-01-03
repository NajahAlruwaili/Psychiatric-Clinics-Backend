const express = require("express");
const cors = require("cors");
const { response } = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const imagesArr = [
  {id:1,name:"cortado",imageurl:"https://www6.0zz0.com/2021/11/15/08/318861782.jpg"},
  { id:2,name:"v60",imageurl:"https://www2.0zz0.com/2021/11/15/07/967525179.jpg"},
  { id:3,name:"ispresso",imageurl:"https://www5.0zz0.com/2021/11/15/08/442096145.jpg"},
  { id:4,name:"latte",imageurl:"https://www5.0zz0.com/2021/11/15/07/948650272.jpg"},
  {id:5,name:"flatWhite",imageurl:"https://www11.0zz0.com/2021/11/15/08/671271755.jpg"},
  { id:6,name:"chemex",imageurl:"https://www5.0zz0.com/2021/11/15/08/569620154.jpg"},
  { id:7,name:"iceLatte",imageurl:"https://www4.0zz0.com/2021/11/15/07/316808422.jpg"},
  {id:8,name:"cappuccino",imageurl:"https://www8.0zz0.com/2021/11/15/08/259104387.jpg"},
];
app.get("/", (req, res) => {
  res.status(200);
  res.json(imagesArr);
});
app.post("/pic", (req, res) => {
  const {id, name, imageurl } = req.body;
 pics.push({id, name, imageurl });
  res.status(200);
  res.json({id, name, imageurl });
});
app.get("/imagesArr", (req, res) => {
  res.status(200);
  res.json(pics);
});
// app.put("/likes/:id",(req,res)=>{
//   const id = req.params.id
//   for(let i=0;i<imagesArr.length;i++){
//   if(imagesArr[i].id ==id){
//     if(imagesArr[i].toggle== true){
//       imagesArr[i].toggle = false
//   } else {
//     imagesArr[i].toggle = true
//   }
//   }}
//   res.status(200)
//   res.json(imagesArr)
//   })
 const checked = [];
app.post("/like/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id, "id");
  for (let i = 0; i < imagesArr.length; i++) {
    if (imagesArr[i].id == id) {
      checked.push(imagesArr[i]);
      console.log(checked);
    }
  }
  res.status(200);
  res.json(checked);
});
app.delete("/like/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < checked.length; i++) {
    if (checked[i].id == id) {
      checked.splice(i,1);
      // console.log(fav);
    }
  }
  res.status(200);
  res.json(checked);
});


app.get("/like/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < checked.length; i++) {
    if (checked[i].id == id) {
      res.json(true);
    }
  }

     res.status(200);
     res.json(false);


});

// app.delete("/employees/:name", (req, res) => {
//   const employee = req.params.name;
//  // console.log(student);
//  employees.forEach((element,index)=>{
//        if (element.name==employee){
//         employees.splice(index,1)
//         res.status(200)
//         res.json(employees)        
//        }
//   });
// });
/////////////////
const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});