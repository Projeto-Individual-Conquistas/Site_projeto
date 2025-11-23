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


module.exports = {
    mostrarJogos
};