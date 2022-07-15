const express = require("express");
const person_routes = require("./person_routes");

const ApiRoutes = (app) => {
  const project_routes = express.Router();
  /* http://localhost:3000/api/v1 */
  app.use("/api/v1", project_routes);

  /* POST => http://localhost:3000/api/v1/people/person */
  /* GET => http://localhost:3000/api/v1/people/ */
  /* GET => http://localhost:3000/api/v1/people/personId */
  /* PUT => http://localhost:3000/api/v1/people/personId */
  /* DELETE => http://localhost:3000/api/v1/people/personId */
  project_routes.use("/people", person_routes);
};

module.exports = ApiRoutes;
