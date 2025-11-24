var bibliotecaModel = require("../models/bibliotecaModel");


function  mostrarBiblioteca(req, res) {
    var email = req.params.email;
    var id_cadastro  = req.params.id_cadastro;

    if (id_cadastro != undefined && email != undefined) {

        bibliotecaModel.mostrarBiblioteca(email, id_cadastro)
            .then(
                function (resultadoMostrarBiblioteca) {
                    console.log(`\nResultados encontrados: ${resultadoMostrarBiblioteca}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoMostrarBiblioteca)}`); // transforma JSON em String

                    

                        res.json(resultadoMostrarBiblioteca)
                        

                }   
            )
    } } 

function  cadastrarBiblioteca (req, res) {
    var id_jogo = req.body.id_jogoServer;
    var id_cadastro  = req.body.id_cadastroServer; 
    var horas_jogo = req.body.horas_jogoServer;
    var conquistas = req.body.conquistasServer;

        bibliotecaModel.cadastrarBiblioteca(id_jogo, id_cadastro, horas_jogo, conquistas)
            .then(
                function (resultadocadastrarBiblioteca) {
                    console.log("ACESSEI O CADASTRAR BIBLIOTECA CONTROLLER");
                    console.log(`\nResultados encontrados: ${resultadocadastrarBiblioteca}`);
                    console.log(`Resultados: ${JSON.stringify(resultadocadastrarBiblioteca)}`); 
                        res.json(resultadocadastrarBiblioteca)
                }   
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } 

function exibirHistorico(req, res) {
    var id_cadastro = req.params.id_cadastro;

    bibliotecaModel.exibirHistorico(id_cadastro)
        .then(
            function (resultadoHistorico) {
                console.log(`\nResultados encontrados: ${resultadoHistorico}`);
                console.log(`Resultados: ${JSON.stringify(resultadoHistorico)}`);   
                res.json(resultadoHistorico);
            }   
        )
    }
module.exports = {
    mostrarBiblioteca,
    cadastrarBiblioteca,
    exibirHistorico
};