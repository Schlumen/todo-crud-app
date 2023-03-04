const router = require("express").Router();
// Bring in user registration and login function
const { userRegister, userLogin } = require("../utils/Auth");

// User registration route
router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "user", res);
});

// Admin registration route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

// User login route
router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "user", res);
});

// Admin login route
router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
});

// Shared profile routes
router.get("/profile", async (req, res) => {});
router.put("/profile", async (req, res) => {});
router.delete("/profile", async (req, res) => {});

router.post("/user-note", async (req, res) => {});
router.get("/user-note", async (req, res) => {});
router.put("/user-note", async (req, res) => {});
router.delete("/user-note", async (req, res) => {});

// Admin protected route
router.get("/all-users", async (req, res) => {});

module.exports = router;