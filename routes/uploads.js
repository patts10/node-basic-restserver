const { Router } = require("express");
const { check } = require("express-validator");
const { saveFile } = require("../controllers/uploads");

const router = Router();

router.post('/', saveFile)

module.exports = router;