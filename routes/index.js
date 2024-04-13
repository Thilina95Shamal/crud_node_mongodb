const express = require("express");
const user = require("./user/main_user");
const userType = require("./user_types/main_user_types");
const router = express.Router();


router.use("/user", user);
router.use("/user_types", userType);

module.exports = router;