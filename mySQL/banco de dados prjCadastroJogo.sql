CREATE DATABASE IF NOT EXISTS db_cadastro_jogo; 

USE db_cadastro_jogo;

CREATE TABLE IF NOT EXISTS tb_jogo (
id_jogo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nome_jogo VARCHAR(100) NOT NULL UNIQUE,
ano_de_lancamento DATE NOT NULL, 
tipo_do_jogo VARCHAR(100) NOT NULL UNIQUE,
avaliacao VARCHAR(100) NOT NULL
); 


