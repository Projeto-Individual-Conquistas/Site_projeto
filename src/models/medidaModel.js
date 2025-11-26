var database = require("../database/config");

function buscarUltimasMedidas(id_biblioteca, limite_linhas) {

    var instrucaoSql = `SELECT
    aproveitamento,
    DATE_FORMAT(data_historico, '%d/%m/%Y %H:%i:%s') AS momento_grafico
    FROM historico
    WHERE fk_biblioteca_historico = ${id_biblioteca}
    ORDER BY id_historico DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_biblioteca) {

    var instrucaoSql = `SELECT
    aproveitamento,
    DATE_FORMAT(data_historico, '%d/%m/%Y %H:%i:%s') AS momento_grafico
    FROM historico
    WHERE fk_biblioteca_historico = ${id_biblioteca}
    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGenero(id_biblioteca){

    var instrucaoSql = `SELECT
    J.genero,
    AVG(B.conquistas) AS conquistas
    FROM biblioteca_de_jogos AS B
    JOIN jogo AS J ON B.fk_jogo = J.id_jogo
    WHERE B.fk_usuario = ${id_biblioteca} 
    GROUP BY J.genero
    ORDER BY conquistas DESC LIMIT 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarGenero
}

