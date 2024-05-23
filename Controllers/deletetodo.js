const todoModel = require("../Models/todo");

const deleteTODO = async (req,res)=>
    {
        const{id}=req.params;
        try{
            const response = await todoModel.findByIdAndDelete(id)
            if(!response)
                {
                    return res.json("not found")
                }
        }catch(err)
        {
            res.json(err)
        }
        
    }
module.exports={deleteTODO}