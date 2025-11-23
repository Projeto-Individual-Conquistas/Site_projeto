var lista_jogosModel = require("../models/lista_jogosModel");

function  mostrarJogos(req, res) {

        lista_jogosModel.mostrarJogos()
        .then( 
            function (resultadomostrarJogos) {
                    console.log("ACESSEI O LISTA_JOGOS CONTROLLER");
                    console.log(`\nResultados encontrados: ${resultadomostrarJogos}`);
                    console.log(`Resultados: ${JSON.stringify(resultadomostrarJogos)}`); 

                    

                        res.json(resultadomostrarJogos)
                        

                }   
            )
 } 

 function selecionarJogo(req, res) {
    var id_jogo = req.body.jogoServer;
        lista_jogosModel.selecionarJogo(id_jogo)
        .then( 
            function (resultadoselecionarJogo) {
                    console.log("ACESSEI O SELECIONAR JOGO CONTROLLER");
                    console.log(`\nResultados encontrados: ${resultadoselecionarJogo}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoselecionarJogo)}`);
                        res.json(resultadoselecionarJogo)
                }   
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
 } 

module.exports = {
    mostrarJogos,
    selecionarJogo
};