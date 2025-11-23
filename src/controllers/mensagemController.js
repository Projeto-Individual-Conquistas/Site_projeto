var mensagemModel = require("../models/mensagemModel");

function enviar(req, res){
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;

    if(email == ''){
        res.status(400).send("Email não inserido corretamente");
    }else if(mensagem == ''){
        res.status(400).send("A mensagem não foi inserida");
    }else{
        mensagemModel.enviar(email, mensagem)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}

module.exports = {
    enviar
}