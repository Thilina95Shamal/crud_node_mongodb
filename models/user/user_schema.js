const mongoose = require("mongoose");
const schemaType = require("../../common");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: schemaType.TypeString,
      required: true,
    },
    email: {
      type: schemaType.TypeString,
      required: true,
      unique: true,
    },
    password: {
      type: schemaType.TypeString,
      requried: true,
    },
    status: {
      type: schemaType.TypeString,
      default: "Active",
    },
    created_date: {
      type: schemaType.TypeDate,
      default: Date.now,
    },
    usertype : {
      type: schemaType.TypeString,
      requried: true,
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
