const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require("./user");
db.userType = require("./user_type");


module.exports = db;