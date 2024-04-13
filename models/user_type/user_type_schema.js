const mongoose = require("mongoose");
const schemaType = require("../../common");

const userTypeSchema = new mongoose.Schema(
  {
    usertype : {
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
  },
  { timestamps: true }
);

module.exports = userTypeSchema;
