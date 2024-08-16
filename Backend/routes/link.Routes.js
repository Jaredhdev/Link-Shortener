const express = require("express");
const { shortenLink, fetchUrl } = require("../controllers/linkController");
const { verifyToken } = require("../config/isAuth");
const router = express.Router();

router.post("/shortenlink", verifyToken, shortenLink);
router.get("/fetchurl", fetchUrl)



module.exports = router;