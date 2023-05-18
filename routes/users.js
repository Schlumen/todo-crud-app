const router = require("express").Router();

// Bring in user registration and login functions
const {
    userRegister,
    userLogin,
    userAuth,
    serializeUser,
    checkRole,
    showAdminData,
    modifyUser,
    deleteUser
} = require("../utils/Auth");

// Bring in notes editing functions
const {
    getNotes,
    createNote,
    updateNote,
    deleteNote
} = require("../utils/Notes");

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
router.put("/profile", userAuth, async (req, res) => {
    await modifyUser(req.body, req.user, res);
});
router.delete("/profile", userAuth, async (req, res) => {
    deleteUser(req.user._id, res);
});

router.post("/user-note", userAuth, async (req, res) => {
    await createNote(req.body, req.user._id, res);
});

router.get("/user-note", userAuth, async (req, res) => {
    await getNotes(req.user._id, res);
});

router.put("/user-note", userAuth, async (req, res) => {
    await updateNote(req.body, req.user._id, res)
});

router.delete("/user-note", userAuth, async (req, res) => {
    await deleteNote(req.body.noteId, req.user._id, res);
});

// Admin protected route
router.get("/all-users", userAuth, checkRole(["admin"]), async (req, res) => {
    await showAdminData(res);
});

module.exports = router;