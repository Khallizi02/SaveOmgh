DROP DATABASE IF EXISTS db_pokemon;

CREATE DATABASE IF NOT EXISTS db_pokemon;

USE db_pokemon;

CREATE TABLE IF NOT EXISTS tb_pokemon(
id_pokemon INT AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR (50) NOT NULL,
pv INT,
cor_principal VARCHAR (50),
ataques VARCHAR (50),
FOREIGN KEY (TREINADOR_id_treinador) references tb_treinador(id_treinador)
);

CREAT


