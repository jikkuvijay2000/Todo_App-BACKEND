const todoModel = require("../Models/todo");

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { userInput } = req.body;
    try {
        const editedTodo = await todoModel.findByIdAndUpdate(id, { userInput }, { new: true });
        if (!editedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        return res.status(200).json(editedTodo);
    } catch (err) {
        if (!res.headersSent) {
            return res.status(500).json({ error: err.message });
        }
        console.error('Failed to send response:', err);
    }
};

module.exports = { updateTodo };
