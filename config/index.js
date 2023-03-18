require("dotenv").config();

module.exports = {
    SECRET: process.env.SECRET,
    DB: process.env.DB,
    PORT: process.env.PORT,
    ADMIN_SECRET: process.env.ADMIN_SECRET
};