var express = require("express");
var router = express.Router();


var lista_jogosController = require("../controllers/lista_jogosController");


router.get("/mostrarJogos", function (req, res) {
    lista_jogosController.mostrarJogos(req, res);
})

router.post("/selecionarJogo", function (req, res) {
    lista_jogosController.selecionarJogo(req, res);
});

module.exports = router;