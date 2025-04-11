const formController = require("../controller/formController")

const routes = require("express").Router()

routes.post("/add",formController.addData)

routes.get("/get",formController.getData)

module.exports = routes;