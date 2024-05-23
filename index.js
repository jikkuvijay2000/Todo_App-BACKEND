const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const { userRouter } = require('./Router/users.js');
const mongoose = require('mongoose');
const { todoRouter } = require('./Router/todo.js');


const app = express();
app.use(express.json());
app.use(cors());
const allowedOrigins = [
    'https://bright-dusk-f55498.netlify.app'
    // Add more origins if necessary
];

const corsOptions = {
    origin: function (origin, callback) {
        // Check if the origin is in the allowed origins list
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // If you need to send cookies or authorization headers
};

// Use the CORS middleware
app.use(cors(corsOptions));


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