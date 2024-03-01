const express = require("express");
//el router es el objeto que guarda las rutas
const trackRouter = express.Router();
//Instanciamos al controlador para usar las funciones relativas a cada ruta
const {
  getTrack,
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controler/track.controller");

//OBTENER UNA CANCION
trackRouter.get("/:id", getTrack);

//OBTENER TODAS LAS CANCIONES
trackRouter.get("/", getTracks);

//
trackRouter.post("/", createTrack);

trackRouter.get("/:id", updateTrack);

trackRouter.get("/:id", deleteTrack);

module.exports = trackRouter;
