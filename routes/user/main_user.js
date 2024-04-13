const express = require("express");
const router = express.Router();

const addUser = require("./add_user");
const getUser = require("./get_user");
const updateUser = require("./update_user");
const deleteUser = require("./delete_user");

router.post("/add_user", addUser);
router.get("/get_user", getUser);
router.patch("/update_user/:id", updateUser);
router.delete("/delete_user/:id", deleteUser);



module.exports = router;