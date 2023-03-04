const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { SECRET } = require("../config/index");

// Register user (user and admin)
const userRegister = async (userDets, role, res) => {
    try {
        // Check if username is already taken
        let usernameNotTaken = await validateUsername(userDets.username);
        if (!usernameNotTaken) {
            return res.status(400).json({
                message: "Username is already taken",
                success: false
            });
        }

        // Check if email is already taken
        let emailNotTaken = await validateEmail(userDets.email);
        if (!emailNotTaken) {
            return res.status(400).json({
                message: "Email is already registered",
                success: false
            });
        }

        // Get the hashed password
        const password = await bcrypt.hash(userDets.password, 12);
        // Create a new user
        const newUser = new User({
            ...userDets,
            password,
            role
        });
        await newUser.save();
        return res.status(201).json({
            message: "Successfully registered, please log in",
            success: true
        });
    } catch(err) {
        return res.status(500).json({
            message: "Unable to create account",
            success: false
        });
    }
};

// Login user (user and admin)
const userLogin = async (userCreds, role, res) => {
    let { username, password } = userCreds;
    // Check if username is in the database
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({
            message: "Username is not found",
            success: false
        });
    }
    // Check user role
    if (user.role !== role) {
        return res.status(403).json({
            message: "Please make sure to log in from the right portal",
            success: false
        });
    }
    // Check password
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        // Sign in the user and issue the token
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.emeil
        }, SECRET, { expiresIn: "7 days"});
        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        };
        return res.status(200).json({
            ...result,
            message: "Sucessfully logged in",
            success: true
        })
    } else {
        return res.status(403).json({
            message: "Incorrect password",
            success: false
        });
    }
}

const validateUsername = async username => {
    let user = await User.findOne({ username });
    return user ? false : true;
};

const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};

module.exports = {
    userLogin,
    userRegister
};