const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel  = require('../Models/users');


const userLogin = async (req,res) => {
    try {
        const { username,password } = req.body;
        const user = await userModel.findOne({ username });
        if(!user)
            {
              return  res.json("User not registered!")
            }

        const loggedIn = await bcrypt.compare(password,user.password)

        if(!loggedIn)
            {
               return res.json("Username/Password Incorrect")
            }
        const token = jwt.sign({id:user._id},"secret");
        res.json({token,userID:user._id})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const userRegister = async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await userModel.findOne({ username });

        if (response) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new userModel({ username, password:hashedPassword });
        const userSave = await newUser.save();
        res.json(userSave);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const verifyToken =(req,res,next)=>
    {
        const token = req.headers.authorization;
        if(token)
            {
                jwt.verify(token,"secret",(err)=>{
                    if(err) return res.status(403);
                    next()
                });
            }
        else{
            res.status(401);
        }
    }




module.exports = { userLogin, userRegister,verifyToken };


