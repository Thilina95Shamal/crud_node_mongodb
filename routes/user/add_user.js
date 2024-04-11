const { insertNewDocument } = require("../../controller");
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  usertype: Joi.string().required(),
});

const addUser = async (req, res) => {
  try {
    const validate = await schema.validateAsync(req.body);
    const user = await insertNewDocument("users", req.body);
    return res.status(201).send({ status: 201, user });
  } catch (e) {
    res.status(500).send({ status: 500, message: e.message });
  }
};

module.exports = addUser;