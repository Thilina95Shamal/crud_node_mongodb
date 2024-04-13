const { insertNewDocument } = require("../../controller");
const Joi = require("joi");

const schema = Joi.object({
  usertype: Joi.string().required(),
});

const addUserType = async (req, res) => {
  try {
    const validate = await schema.validateAsync(req.body);
    const userType = await insertNewDocument("userType", req.body);
    return res.status(201).send({ status: 201, userType });
  } catch (e) {
    res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = addUserType;