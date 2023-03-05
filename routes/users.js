const router = require("express").Router();
// Bring in user registration and login function
const {
    userRegister,
    userLogin,
    userAuth,
    serializeUser,
    checkRole
} = require("../utils/Auth");

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
router.get("/profile", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
});
router.put("/profile", userAuth, async (req, res) => {});
router.delete("/profile", userAuth, async (req, res) => {});

router.post("/user-note", userAuth, async (req, res) => {});
router.get("/user-note", userAuth, async (req, res) => {});
router.put("/user-note", userAuth, async (req, res) => {});
router.delete("/user-note", userAuth, async (req, res) => {});

// Admin protected route
router.get("/all-users", userAuth, checkRole(["admin"]), async (req, res) => {
    return res.status(200).json("Hello Admin");
});

module.exports = router;