var database = require("../database/config")


function mostrarBiblioteca(email, id_cadastro) {

    /*
    var instrucaoSql  = `SELECT idSafra, 
		idsensor, 
        status_ativo  
        FROM safra_wasabi JOIN funcionario 
        ON fk_funcionario = idFuncionario 
        JOIN sensor 
        ON fk_safra = idSafra 
        WHERE email = '${email}' AND fk_usuario = '${id_usuario}';` 
*/
   var instrucaoSql  = `SELECT
    J.nome,
    J.capa,
    B.id_biblioteca,
    B.horas_jogo,
    B.conquistas
    FROM biblioteca_de_jogos AS B 
    JOIN  jogo AS J ON B.fk_jogo = J.id_jogo 
    JOIN usuario AS U ON B.fk_usuario = U.id_cadastro 
    WHERE U.email = '${email}' AND B.fk_usuario = '${id_cadastro}';` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function cadastrarBiblioteca(id_jogo, id_cadastro, horas_jogo, conquistas) {

    var instrucaoSql = `INSERT INTO 
    biblioteca_de_jogos (id_biblioteca, fk_usuario, fk_jogo, horas_jogo, conquistas, versao) 
    VALUES (${id_cadastro}, ${id_cadastro}, ${id_jogo}, ${horas_jogo}, ${conquistas}, 1.0);`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaConquistas(id_cadastro) {
    var instrucaoSql = `SELECT AVG(conquistas) AS media_conquistas FROM biblioteca_de_jogos WHERE fk_usuario = ${id_cadastro};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirHistorico(id_cadastro,id_jogo,aproveitamento){
    var instrucaoSql = `INSERT INTO
    historico (fk_biblioteca_historico, fk_usuario_historico, fk_jogo_historico, aproveitamento)
    VALUES (${id_cadastro},${id_cadastro},${id_jogo},${aproveitamento})`

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function exibirHistorico(id_cadastro) {

    var instrucaoSql = `SELECT
    J.capa,
    J.nome,
    H.data_historico
FROM historico AS H JOIN biblioteca_de_jogos AS B 
    ON H.fk_biblioteca_historico = B.id_biblioteca 
    AND H.fk_usuario_historico = B.fk_usuario
    AND H.fk_jogo_historico = B.fk_jogo 
JOIN jogo AS J ON H.fk_jogo_historico = J.id_jogo 
WHERE H.fk_usuario_historico = ${id_cadastro};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarBiblioteca,
    cadastrarBiblioteca,
    mediaConquistas,
    inserirHistorico,
    exibirHistorico
};