var database = require("../database/config")


function mostrarBiblioteca(email, id_usuario) {

    var instrucaoSql  = `SELECT idSafra, 
		idsensor, 
        status_ativo  
        FROM safra_wasabi JOIN funcionario 
        ON fk_funcionario = idFuncionario 
        JOIN sensor 
        ON fk_safra = idSafra 
        WHERE email = '${email}' AND fk_usuario = '${id_usuario}';` 

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
    mostrarBiblioteca
};