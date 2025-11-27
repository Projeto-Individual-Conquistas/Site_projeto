-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

Create database projeto_individual;

use projeto_individual;

CREATE TABLE `mensage_usuario`(
`id_mensagem` INT PRIMARY KEY AUTO_INCREMENT,
`email` VARCHAR(100) NOT NULL,
`mensagem` VARCHAR(500) NOT NULL);
 
CREATE TABLE `usuario` (
  `id_cadastro` INT PRIMARY KEY AUTO_INCREMENT,
  `apelido` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `dt_cadastro` DATETIME DEFAULT CURRENT_TIMESTAMP);


CREATE TABLE `jogo` (
  `id_jogo` INT PRIMARY KEY AUTO_INCREMENT,
  `capa` VARCHAR(500) NULL,
  `nome` VARCHAR(50) NOT NULL,
  `genero` VARCHAR(45) NOT NULL,
  CONSTRAINT`chk_genero` CHECK(`genero` IN('rpg','acao','esporte','estrategia','luta')),
  `classificacao` INT NULL,
  CONSTRAINT `chk_classificacao`
  CHECK(`classificacao` IN('10','14','16','18')),
  `dt_lancamento` DATE NOT NULL,
  `publicadora` VARCHAR(100) NOT NULL,
  `desenvolvedora` VARCHAR(100) NOT NULL,
  `valor` DECIMAL(5,2) NULL,
  `peso` DECIMAL(5,2) NOT NULL,
  `online` TINYINT NULL,
  `crossplay` TINYINT NULL);


CREATE TABLE `biblioteca_de_jogos` (
  `id_biblioteca` INT AUTO_INCREMENT,
  `fk_usuario` INT NOT NULL,
  `fk_jogo` INT NOT NULL,
  `conquistas` INT NULL,
  CONSTRAINT `chk_conquistas` 
    CHECK (`conquistas` <= 55),
  `horas_jogo` INT NULL,
  `dt_compra` DATE NULL,
  `versao` CHAR(3) NULL,
  `lista_desejos` TINYINT NULL,
  PRIMARY KEY (`id_biblioteca`, `fk_usuario`, `fk_jogo`),
  CONSTRAINT `fk_biblioteca_de_jogos_cadastro`
    FOREIGN KEY (`fk_usuario`)
    REFERENCES `usuario` (`id_cadastro`),
  CONSTRAINT `fk_biblioteca_de_jogos_jogo`
    FOREIGN KEY (`fk_jogo`)
    REFERENCES `jogo` (`id_jogo`));



CREATE TABLE `conteudo_adicional` (
  `id_conteudo_adicional` INT AUTO_INCREMENT,
  `fk_jogo` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `dt_lancamento` DATE NOT NULL,
  `valor` DECIMAL(5,2) NULL,
  PRIMARY KEY (`id_conteudo_adicional`, `fk_jogo`),
  CONSTRAINT `fk_conteudo_adicional_jogo`
    FOREIGN KEY (`fk_jogo`)
    REFERENCES `jogo` (`id_jogo`));

CREATE TABLE `conquista` (
  `id_conquista` INT AUTO_INCREMENT,
  `fk_jogo` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `raridade` VARCHAR(45) NOT NULL,
  CONSTRAINT `chk_raridade` 
  CHECK(`raridade` IN('comum','raro','muito raro','ultra raro')),
  `descricao` VARCHAR(500) NULL,
  `grau` VARCHAR(45) NULL,
  CONSTRAINT `chk_grau`
  CHECK (`grau` IN('bronze','prata','ouro','platina')),
  PRIMARY KEY (`id_conquista`, `fk_jogo`),
  CONSTRAINT `fk_conquista_jogo`
    FOREIGN KEY (`fk_jogo`)
    REFERENCES `jogo` (`id_jogo`));
    
    CREATE TABLE `historico` (
  `id_historico` INT AUTO_INCREMENT,
  `fk_biblioteca_historico` INT NOT NULL,
  `fk_usuario_historico` INT NOT NULL,
  `fk_jogo_historico` INT NOT NULL,
  `aproveitamento` DECIMAL (5,2),
  `data_historico` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_historico`, `fk_biblioteca_historico`, `fk_usuario_historico`, `fk_jogo_historico`),
    CONSTRAINT `fk_historico_biblioteca_de_jogos`
    FOREIGN KEY (`fk_biblioteca_historico` , `fk_usuario_historico` , `fk_jogo_historico`)
    REFERENCES `biblioteca_de_jogos` (`id_biblioteca` , `fk_usuario` , `fk_jogo`));
    
    