CREATE DATABASE neighborhoodLib_db;
USE neighborhoodLib_db;
CREATE TABLE participants (
	person_id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    Address VARCHAR(255),
    Email VARCHAR(255),
    phoneNum VARCHAR(255),
    userPass VARCHAR(255),
    userStatus VARCHAR(255)
    );
    
CREATE TABLE Books (
	book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    Genre VARCHAR(255),
    bookSynopsis VARCHAR(255),
    partOfSeries VARCHAR(255),
    bookStatus VARCHAR(255),
    bookOwner INT, 
    FOREIGN KEY (bookOwner) REFERENCES participants (person_id)
        );

CREATE TABLE booksOut (
	refNum INT AUTO_INCREMENT PRIMARY KEY,
    borrowP_id INT,
    FOREIGN KEY (borrowP_id) REFERENCES participants (person_id),
    bookLent INT,
    FOREIGN KEY (bookLent) REFERENCES Books (book_id),
    borrowDate VARCHAR(255),
    estDue VARCHAR(255)
    );