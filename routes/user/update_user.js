const { updateDocument } = require("../../controller");
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().required(),
  usertype: Joi.string().required(),
});

const updateUser = async (req, res) => {
    try {
      const validate = await schema.validateAsync(req.body);
      const userUpdated = await updateDocument(
        "users",
        { _id: req.params.id },
        req.body
      );
    
      
      return res.status(200).send({ status: 200, userUpdated });
    } catch (e) {
      res.status(500).send({ status: 500, message: e.message });
    }
};

module.exports = updateUser;