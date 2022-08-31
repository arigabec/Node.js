const { post } = require("../../dataAccess/trainer");

const postTrainer = async (req, res) => {
  const { body } = req;
  console.log(body);
  const trainer = await post(body);
  return { success: true, message: "POST Trainer: created successfully", body};
};

module.exports = postTrainer;