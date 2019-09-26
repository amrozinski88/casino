DROP DATABASE IF EXISTS excalibar;

CREATE DATABASE excalibar;

USE excalibar;

create table stock 
(
id INT AUTO_INCREMENT NOT NULL,
item_name VARCHAR (225) NOT NULL,
quantity INT NOT NULL
);


