var usuarioModel = require("../models/usuarioModel");
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


module.exports = {
    mostrarBiblioteca
};