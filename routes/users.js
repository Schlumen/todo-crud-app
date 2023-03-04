const router = require("express").Router();

// User registration route
router.post("/register-user", async (req, res) => {});

// Admin registration route
router.post("/register-admin", async (req, res) => {});

// User login route
router.post("/login-user", async (req, res) => {});

// Admin login route
router.post("/login-admin", async (req, res) => {});

// User protected routes
router.get("/user-profile", async (req, res) => {});
router.put("/user-profile", async (req, res) => {});
router.delete("/user-profile", async (req, res) => {});

router.post("/user-note", async (req, res) => {});
router.get("/user-note", async (req, res) => {});
router.put("/user-note", async (req, res) => {});
router.delete("/user-note", async (req, res) => {});

// Admin protected route
router.get("/admin-profile", async (req, res) => {});

module.exports = router;