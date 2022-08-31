const { findByID } = require("../../dataAccess/trainer");

const getTrainerByID = async (req, res) => {
  const {params} = req;
  const trainer = await findByID(params);
  return { success: true, message: "GET Trainer: getting trainer by ID", trainer};
};

module.exports = getTrainerByID;