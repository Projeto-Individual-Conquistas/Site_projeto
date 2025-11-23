var database = require("../database/config");

function buscarPorId(id_usuario) {
  var instrucaoSql = `SELECT * FROM usuario WHERE id_usuario = '${id_usuario}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id_usuario, apelido, email FROM usuario`;

  return database.executar(instrucaoSql);
}


module.exports = { buscarPorId, listar };

