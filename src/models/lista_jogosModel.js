var database = require("../database/config")


function mostrarJogos() {

   var instrucaoSql  = `SELECT
    id_jogo,
    nome,
    capa
    FROM
    jogo;` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
    mostrarJogos
};