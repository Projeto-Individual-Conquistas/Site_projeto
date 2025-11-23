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
    biblioteca_de_jogos (fk_usuario, fk_jogo, horas_jogo, conquistas, versao) 
    VALUES (${id_cadastro}, ${id_jogo}, ${horas_jogo}, ${conquistas}, 1.0);`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarBiblioteca,
    cadastrarBiblioteca
};