var usuarioModel = require("../models/usuarioModel");
var bibliotecaModel = require("../models/bibliotecaModel");


function  mostrarBiblioteca(req, res) {
    var email = req.params.email;
    var id_usuario  = req.params.id_usuario;

    if (id_usuario != undefined && email != undefined) {

        bibliotecaModel.mostrarBiblioteca(email, id_usuario)
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