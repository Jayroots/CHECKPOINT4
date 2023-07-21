CREATE DATABASE IF NOT EXISTS `qualite_eau_db`;
USE `qualite_eau_db`;
DROP TABLE IF EXISTS `qualite_eau_ville`;
CREATE TABLE IF NOT EXISTS `qualite_eau_ville` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `code_commune` VARCHAR (35) NOT NULL,
    `nom_commune` VARCHAR (35) NOT NULL,
    `conformite_limites_pc_prelevement` VARCHAR (35) NOT NULL,
    `image` VARCHAR (255) NOT NULL,
    primary key (`id`)
);
INSERT INTO `qualite_eau_ville` (code_commune, nom_commune, conformite_limites_pc_prelevement, image) VALUES 
    ('30000', 'Nimes','C', 'https://cdn.pixabay.com/photo/2017/10/23/19/10/amphitheater-2882111_1280.jpg' ),
    ('30001', 'Orleans','C', 'https://cdn.pixabay.com/photo/2013/11/07/09/29/joan-of-arc-206939_1280.jpg' ),
    ('30002', 'Nantes','N', 'https://cdn.pixabay.com/photo/2019/04/01/16/20/landscape-4095785_1280.jpg' ),
    ('30003', 'Lille','N', 'https://cdn.pixabay.com/photo/2017/08/20/00/16/lille-2660311_1280.jpg' );
