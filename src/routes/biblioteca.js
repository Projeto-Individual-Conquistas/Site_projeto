var express = require("express");
var router = express.Router();


var bibliotecaController = require("../controllers/bibliotecaControler");
const { route } = require("./medidas");


router.get("/mostrarBiblioteca/:email/:id_cadastro", function (req, res) {
    bibliotecaController.mostrarBiblioteca(req, res);
})

router.post("/cadastrarBiblioteca", function (req, res) {
    bibliotecaController.cadastrarBiblioteca(req, res);
});
router.get("/mediaConquistas/:id_cadastro", function (req, res) {
    bibliotecaController.mediaConquistas(req, res);
});

router.post("/inserirHistorico", function (req, res) {
    bibliotecaController.inserirHistorico(req, res);
});
router.get("/exibirHistorico/:id_cadastro", function (req, res) {
    bibliotecaController.exibirHistorico(req, res);
});
module.exports = router;