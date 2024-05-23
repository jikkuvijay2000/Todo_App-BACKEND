const todoModel = require("../Models/todo");

const deleteTODO = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await todoModel.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ message: "Todo not found" });
        }
        return res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
        if (!res.headersSent) {
            return res.status(500).json({ error: err.message });
        }
        console.error('Failed to send response:', err);
    }
};

module.exports = { deleteTODO };
