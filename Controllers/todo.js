const todoModel = require("../Models/todo")


const allTodo = async(req,res)=>
    {
        const{userID}=req.query;
        try
        {
        
            const response = await todoModel.find({userOwner:userID})
            res.json(response)
        }
        catch(err)
        {
            res.json(err)
        }
    }


    const inputTodo = async (req,res)=>
        {
            const {userInput,userOwner}=req.body;
            const newTodo =  new todoModel({userInput,userOwner})
            try
            {       
                const response = await newTodo.save()
                res.json(response)
            }
            catch(err)
            {
                res.json(err)
            }
        }

    


module.exports={allTodo,inputTodo}