const mongoose = require("mongoose");
const userTypeSchema = require("./user_type_schema"); 

const userType = mongoose.model("userType", userTypeSchema);

module.exports = userType;