const express = require("express");
const { shortenLink, fetchUrl } = require("../controllers/linkController");
const router = express.Router();

router.post("/shortenlink", shortenLink);
router.get("/fetchurl", fetchUrl)



module.exports = router;