const { updateDocument } = require("../../controller");
const Joi = require("joi");

const schema = Joi.object({
  usertype: Joi.string().required(),
  status: Joi.string().required(),
});

const updateUserType = async (req, res) => {
    try {
      const validate = await schema.validateAsync(req.body);
      const userUpdatedType = await updateDocument(
        "userType",
        { _id: req.params.id },
        req.body
      );
      return res.status(200).send({ status: 200, userUpdatedType });
    } catch (e) {
      res.status(500).send({ status: 500, message: e.message });
    }
};

module.exports = updateUserType;