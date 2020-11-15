require('dotenv').config();
import { resolveSoa } from "dns";
import express from "express";
import path from "path";
const app = express();
import {UserFacade} from "./facades/userFacades"
const debug = require("debug")("game-case")
UserFacade.testUsers()



app.get("/api/users/:id", (req, res) => {
  var i = req.params.id
  res.status(200).json(UserFacade.getUser(i))
})

app.get("/api/users/", (req, res) => {
  res.status(200).json(UserFacade.getAllUsers())
})

app.post("/api/users/", async(req:any, res:any) => {
  if (await UserFacade.addUser(req.body))
  res.status(200).send("User was added!");
  else res.status(400).send("There was an error in adding");
})

app.delete("/api/users/delete/:id", async(req:any, res:any) => {
  if (await UserFacade.deleteUser(req.params.id))
  res.status(200).send("was deleted");
  else res.status(400).send("There was an error in deleting");
})

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


