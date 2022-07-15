const express = require("express");
const person_model = require("../models/person");
const person_routes = express.Router();

person_routes.post("/person", (req, res) => {
  const person = person_model(req.body);
  person
    .save()
    .then((data) => {
      res.json({ message: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

person_routes.get("/", (req, res) => {
  person_model
    .find()
    .then((data) => {
      res.json({ message: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});
person_routes.get("/:personId", (req, res) => {

});
person_routes.put("/:personId", (req, res) => {});
person_routes.delete("/:personId", (req, res) => {});

module.exports = person_routes;
