const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const { userRouter } = require('./Router/users.js');
const mongoose = require('mongoose');
const { todoRouter } = require('./Router/todo.js');


const app = express();
app.use(express.json());
app.use(cors());
app.use(cors(
  { origin : "https://bright-dusk-f55498.netlify.app/"}
))

app.use("/api",userRouter);
app.use("/todo",todoRouter);

const PORT = 3000||process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MONGO DB Connected"))
.catch((err)=>console.log(err));

app.listen(PORT,()=>
{
    console.log("server started at PORT : "+PORT);
})