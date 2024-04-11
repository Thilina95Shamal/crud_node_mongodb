const { find } = require("../../controller");

const getUser = async (req, res) => {
    try {
      let response = await find("users", {});
      return res.status(200).send({ status: 200, response });
    } catch (e) {
      res.status(405).send({ status: 405, message: e.message });
    }
  };

  module.exports = getUser;