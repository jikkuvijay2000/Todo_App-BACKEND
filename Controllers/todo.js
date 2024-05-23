const todoModel = require("../Models/todo");

const allTodo = async (req, res) => {
    const { userID } = req.query;
    try {
        const response = await todoModel.find({ userOwner: userID });
        return res.status(200).json(response);
    } catch (err) {
        if (!res.headersSent) {
            return res.status(500).json({ error: err.message });
        }
        console.error('Failed to send response:', err);
    }
};



const inputTodo = async (req, res) => {
    const { userInput, userOwner } = req.body;
    const newTodo = new todoModel({ userInput, userOwner });
    try {
        const response = await newTodo.save();
        return res.status(201).json(response);
    } catch (err) {
        if (!res.headersSent) {
            return res.status(500).json({ error: err.message });
        }
        console.error('Failed to send response:', err);
    }
};




module.exports = { allTodo ,inputTodo };
