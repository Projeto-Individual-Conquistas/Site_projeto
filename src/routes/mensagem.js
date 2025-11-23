var express = require("express");
var router = express.Router();

var mensagemController = require("../controllers/mensagemController");

router.post("/botao_enviar", function (req, res){
    mensagemController.enviar(req,res);
})

module.exports = router;