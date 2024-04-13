const { deleteDocument } = require("../../controller");
const { find } = require("../../controller");



const deleteUserType = async (req, res) => {
    try {
      //We check if a user has already a user type if it does then permission deny to delete
      const users = await find("users",{ usertype: req.params.id});
      if(users.length >= 0){
        return res.status(400).send({ status: 400, message: "Cannot delete usertype. It is still referenced by users." });
      }else{
        const userDelete = await deleteDocument("userType",{ _id: req.params.id });      
        return res.status(200).send({ status: 200, userDelete });
      }
    } catch (e) {
      res.status(500).send({ status: 500, message: e.message });
    }
};

module.exports = deleteUserType;