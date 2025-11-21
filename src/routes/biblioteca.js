var express = require("express");
var router = express.Router();


var bibliotecaController = require("../controllers/bibliotecaControler");


router.get("/mostrarBiblioteca/:email/:id_usuario", function (req, res) {
    bibliotecaController.mostrarBiblioteca(req, res);
})


module.exports = router;