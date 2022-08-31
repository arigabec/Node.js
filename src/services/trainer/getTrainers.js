const { findAll } = require("../../dataAccess/trainer");

const getTrainers = async (req, res) => {
  const trainers = await findAll();
  return { success: true, message: "GET Trainers: getting all the trainers", trainers };
};

module.exports = getTrainers;