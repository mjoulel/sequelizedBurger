-- Create & use JawsDB
CREATE DATABASE JawsDB;
USE JawsDB;

-- Create a burgers table with id: an auto incrementing int that serves as the primary key, burger_name: a string, devoured: a boolean, date: a TIMESTAMP fields
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean(10) NOT NULL,
date TIMESTAMP(8) NOT NULL,
PRIMARY KEY (id)
);

