var database = require("../database/config")

function enviar(email,mensagem){
    var instrucaoSql = `INSERT INTO mensage_usuario (email, mensagem) VALUES
    ('${email}', '${mensagem}');`

    return database.executar(instrucaoSql);
}

module.exports = {enviar};