const todoModel = require("../Models/todo");


const updateTodo = async(req,res)=>
    {
        const {id}=req.params;
        const {userInput}=req.body
        try
        {
            const editedTodo = await todoModel.findByIdAndUpdate(id,{userInput},{new:true}) ;
            if(!editedTodo)
                {
                    res.json("not found")
                    return;
                }
            res.json(editedTodo)
        }catch(err)
        {
            res.json(err)
        }
    }

module.exports={updateTodo}