const express = require("express");
require('dotenv').config()
const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());


const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")
const videoRoute = require("./routers/routes/videoRoute")
const postRoute = require("./routers/routes/postRoute")
const consultantRoute = require("./routers/routes/consultantRoute")
const favoriteRoute = require("./routers/routes/favoriteRoute")
const masegeRoute = require("./routers/routes/masegeRoute")




app.use(signUpRoute);
app.use(loginRoute);
app.use(videoRoute);
app.use(postRoute);
app.use(consultantRoute);
app.use(favoriteRoute);
app.use(masegeRoute);




console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log("server run on 5000 port");
});
