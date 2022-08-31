const routes = require("express").Router();
const trainer = require("./trainer/trainerRoutes");

routes.use("/v1/pokedex", trainer);

module.exports = routes;