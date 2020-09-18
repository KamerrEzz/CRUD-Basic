const express = require("express");
const routes = express.Router();

const User = require("../services/usuarios");
const usuario = new User();

// ver todos los usuarios
routes.get("/", usuario.getUsers);
// // ver un solo usuario
routes.get('/:id', usuario.getUser);
// // crear un usuario
routes.post('', usuario.createUser)
// // editar un usuario
routes.put('/:id', usuario.updateUser)
// // eliminar un usuario
routes.delete('/:id', usuario.deleteUser)

module.exports = routes;
