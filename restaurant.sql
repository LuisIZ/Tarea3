-- Crear base de datos

create database restaurant;

show databases;

-- Crear tabla menu

use restaurant;

CREATE TABLE menu (
    nombre_plato varchar(200), -- columna que guarda nombre del plato
    precio_plato float, -- columna que guarda precio del plato (en soles)
    created_date datetime, -- columna que guarda fecha en que el plato es incluido en el menu
    modified_date datetime -- columna que guarda fecha en que el precio del plato es modificado
);

desc menu;

-- Insertar datos de prueba

INSERT INTO menu (nombre_plato, precio_plato, created_date, modified_date) VALUES ('Lomo saltado', 30, '2021-10-01', '2021-10-11');

INSERT INTO menu (nombre_plato, precio_plato, created_date, modified_date) VALUES ('Tallarin saltado', 25, '2021-10-01', '2021-10-09');

INSERT INTO menu (nombre_plato, precio_plato, created_date, modified_date) VALUES ('Arroz chaufa', 25, '2021-10-01', '2021-10-10');

INSERT INTO menu (nombre_plato, precio_plato, created_date, modified_date) VALUES ('Ceviche', 22, '2021-10-03', '2021-10-08');

SELECT nombre_plato, precio_plato, created_date, modified_date FROM menu;