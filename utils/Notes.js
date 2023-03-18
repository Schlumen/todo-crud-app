const User = require("../models/User");

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

const createNote = async (noteDets, userId, res) => {
    if (noteDets.title && noteDets.content && noteDets.category) {
        let newNote = {
            title: noteDets.title,
            content: noteDets.content,
            category: noteDets.category,
        };
        User.findByIdAndUpdate(userId, {
            $push: { notes: newNote }
        }, { new: true, runValidators: true }).then(user => {
            res.status(200).json({
                message: "Note successfully created",
                success: true
            })}
        ).catch(err => {
            res.status(500).json({
                message: "Error: " + err,
                success: false
            });
        });
    } else {
        return res.status(404).json({
            message: "Please enter all note details",
            success: false
        });
    }
}

const updateNote = async (noteDets, userId, res) => {
    if (noteDets.title && noteDets.content && noteDets.category && noteDets.noteId) {
        await User.updateOne({_id: userId, "notes._id": noteDets.noteId}, {
            $set: {
                "notes.$.title": noteDets.title,
                "notes.$.content": noteDets.content,
                "notes.$.category": noteDets.category
            }
        }, {
            new: true, runValidators: true
        }).then(user => {
            res.status(200).json({
                message: "Note successfully updated",
                success: true
            })}
        ).catch(err => {
            res.status(500).json({
                message: "Error: " + err,
                success: false
            });
        });
    } else {
        return res.status(404).json({
            message: "Please enter all note details",
            success: false
        });
    }
}

const deleteNote = async (noteId, userId, res) => {
    User.findByIdAndUpdate(userId, {
        $pull: { notes: { _id: noteId } }
    }, { new: true }).then(user => {
        res.status(200).json({
            message: "Note successfully deleted",
            success: true
        })}
    ).catch(err => {
        res.status(500).json({
            message: "Error: " + err,
            success: false
        });
    });
}

module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote
};