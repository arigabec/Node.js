const routes = require("express").Router();
const getTrainers  = require("../../services/trainer/getTrainers");
const postTrainer  = require("../../services/trainer/postTrainer");
const getTrainerByID  = require("../../services/trainer/getTrainerByID");

routes.get("/trainers", async (req, res) => {
  const response = await getTrainers(req, res);
  res.json(response);
});

routes.post("/trainer", async (req, res) => {
  const response = await postTrainer(req, res);
  res.json(response);
});

routes.get("/trainer/:id", async (req, res) => {
  const response = await getTrainerByID(req, res);
  res.json(response);
});

module.exports = routes;