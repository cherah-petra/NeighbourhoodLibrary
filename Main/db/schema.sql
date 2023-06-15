CREATE DATABASE neighborhoodLib_db;
USE neighborhoodLib_db;
CREATE TABLE participants (
	person_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    address VARCHAR(255),
    email VARCHAR(255),
    phone_num VARCHAR(255),
    user_pass VARCHAR(255),
    user_status VARCHAR(255)
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