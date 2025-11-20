var usuarioModel = require("../models/usuarioModel");
var safraModel = require("../models/safraModel");


function  mostrarSafra(req, res) {
    var email = req.params.email;
    var id_usuario  = req.params.id_usuario;

    if (id_usuario != undefined && email != undefined) {

        bibliotecaModel.mostrarSafra(email, id_usuario)
            .then(
                function (resultadoMostrarSafra) {
                    console.log(`\nResultados encontrados: ${resultadoMostrarSafra}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoMostrarSafra)}`); // transforma JSON em String

                    

                        res.json(resultadoMostrarSafra)
                        

                }   
            )
    } } 


module.exports = {
    mostrarSafra
};