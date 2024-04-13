const express = require("express");
const router = express.Router();

const addUserType = require("./add_user_type");
const getUserType = require("./get_user_type");
const updateUserType = require("./update_user_type");
const deleteUserType = require("./delete_user_type");

router.post("/add_user_type", addUserType);
router.get("/get_user_type", getUserType);
router.patch("/update_user_type/:id", updateUserType);
router.delete("/delete_user_type/:id", deleteUserType);



module.exports = router;