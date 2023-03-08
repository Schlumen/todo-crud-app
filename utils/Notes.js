const User = require("../models/User");
const uuid = require('uuid');

const getNotes = async (userId, res) => {
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({
            message: "Something went wrong",
            success: false
        });
    }
    return res.status(200).json(user.notes);
}

module.exports = {
    getNotes
};