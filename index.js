const express = require('express');
const app = express();
const port = 3000;
const cookieParser=require("cookie-parser")
require ("dotenv").config();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//cookie middleware
app.use(cookieParser());

let userRouter=require("./routes/userRoute");
app.use("/api",userRouter);

app.get('/', (req, res) => {
  res.send('Hello Worvcvlds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})