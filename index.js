const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");

// Brin in app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Middleware
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// Use router middleware
app.use("/api/users", require("./routes/users"));

// Direct requests to public folder
app.use(exp.static("public"));

// Start the application
const startApp = async () => {
    try {
        // Connect with database
        await connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        success({
            message: `Successfully connected with database\n${DB}`,
            badge: true
        });
    
        // Start server and listen on PORT
        app.listen(PORT, () => {
            success({
                message: `Server started on port ${PORT}`,
                badge: true
            });
        });
    } catch(err) {
        error({
            message: `Unable to connect with database\n${err}`,
            badge: true
        });
        startApp();
    }
}

startApp();