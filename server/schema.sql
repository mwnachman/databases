CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username varchar(255)
);

CREATE TABLE rooms (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
);

CREATE TABLE messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  userId int,
  message varchar(255),
  roomId int,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (roomId) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

