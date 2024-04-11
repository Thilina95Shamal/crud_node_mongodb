const { deleteDocument } = require("../../controller");


const deleteUser = async (req, res) => {
    try {
      const userDelete = await deleteDocument("users",{ _id: req.params.id });      
      return res.status(200).send({ status: 200, userDelete });
    } catch (e) {
      res.status(500).send({ status: 500, message: e.message });
    }
};

module.exports = deleteUser;