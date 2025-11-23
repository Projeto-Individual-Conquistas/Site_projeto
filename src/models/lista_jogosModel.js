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

function selecionarJogo(id_jogo){
    var instrucaoSql = `SELECT
    id_jogo,
    nome,
    genero,
    capa,
    classificacao,
    dt_lancamento,
    publicadora,
    desenvolvedora,
    peso
    FROM
    jogo
    WHERE id_jogo = ${id_jogo};`
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarJogos,
    selecionarJogo
};