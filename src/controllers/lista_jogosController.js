
var lista_jogosModel = require("../models/lista_jogosModel");


function  mostrarJogos(req, res) {
    var email = req.params.email;
    var id_usuario  = req.params.id_usuario;

    if (id_usuario != undefined && email != undefined) {

        bibliotecaModel.mostrarJogos(email, id_usuario)
            .then(
                function (resultadomostrarJogos) {
                    console.log(`\nResultados encontrados: ${resultadomostrarJogos}`);
                    console.log(`Resultados: ${JSON.stringify(resultadomostrarJogos)}`); 

                    

                        res.json(resultadomostrarJogos)
                        

                }   
            )
    } } 


module.exports = {
    mostrarJogos
};