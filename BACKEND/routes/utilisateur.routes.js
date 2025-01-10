const { checkJwt }  = require('./jwtMiddleware');

module.exports = app => {
  const utilisateur = require("../controllers/utilisateur.controllers.js");
  let router = require("express").Router();

  // login utilisateur
  router.post("/login", utilisateur.login);

  // create utilisateur
  router.post("/", utilisateur.createUser);

  // update utilisateur
  router.put("/:id", utilisateur.updateUser);

  // delete utilisateur
  router.delete("/:id", utilisateur.deleteUser);

  app.use('/api/utilisateur', router);
};