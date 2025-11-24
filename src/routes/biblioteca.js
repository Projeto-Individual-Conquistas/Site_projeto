var express = require("express");
var router = express.Router();


var bibliotecaController = require("../controllers/bibliotecaControler");


router.get("/mostrarBiblioteca/:email/:id_cadastro", function (req, res) {
    bibliotecaController.mostrarBiblioteca(req, res);
})

router.post("/cadastrarBiblioteca", function (req, res) {
    bibliotecaController.cadastrarBiblioteca(req, res);
});

router.get("/exibirHistorico/:id_cadastro", function (req, res) {
    bibliotecaController.exibirHistorico(req, res);
});
module.exports = router;