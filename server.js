const express = require("express");
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





app.use(signUpRoute);
app.use(loginRoute);
app.use(videoRoute);
app.use(postRoute);
app.use(consultantRoute);






const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
