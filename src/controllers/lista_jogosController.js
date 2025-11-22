
var lista_jogosModel = require("../models/lista_jogosModel");


function  mostrarJogos(req, res) {
    var email = req.params.email;
    var id_cadastro  = req.params.id_usuario;

    if (id_cadastro != undefined && email != undefined) {

        bibliotecaModel.mostrarJogos(email, id_cadastro)
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