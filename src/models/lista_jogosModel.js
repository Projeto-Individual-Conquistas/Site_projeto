var database = require("../database/config")


function mostrarJogos(email, id_cadastro) {

   var instrucaoSql  = `SELECT
  SELECT
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