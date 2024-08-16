const express = require("express");
const { signUp, login } = require("../controllers/userController");
const { verifyToken } = require("../config/isAuth");
const router = express.Router();

router.post("/signup", signUp);
router.post('/login', login);

// Test jwt auth, sends req back
router.post("/testauth", verifyToken, (req, res) => {
    res.send({ message: "success", user: req.user })
})

module.exports = router;
