var database = require("../database/config");

function buscarUltimasMedidas(id_biblioteca, limite_linhas) {

    var instrucaoSql = `SELECT
    aproveitamento,
    data_historico AS momento_grafico
    FROM historico
    WHERE fk_usuario_historico = ${id_biblioteca}
    ORDER BY id_historico DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(id_biblioteca) {

    var instrucaoSql = `SELECT
    aproveitamento,
    data_historico AS momento_grafico
    FROM historico
    WHERE fk_usuario_historico = ${id_biblioteca}
    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
