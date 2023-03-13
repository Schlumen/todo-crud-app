const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    notes: [{
        title: { type: String },
        content: { type: String },
        category: { type: String, enum: ["A", "B", "C", "D"] }
    }]
}, { timestamps: true });

module.exports = model("users", UserSchema);