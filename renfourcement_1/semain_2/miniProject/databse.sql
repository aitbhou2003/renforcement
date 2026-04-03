CREATE TABLE
    hotels (
        id int PRIMARY key AUTO_INCREMENT,
        nom VARCHAR(100) NOT NULL,
        adresse VARCHAR(255) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        telephone VARCHAR(20) NOT NULL
    ) ENGINE = INNODB;

create table
    typeChambres (
        id int PRIMARY key AUTO_INCREMENT,
        nom varchar(50) not null,
        prixNuit DECIMAL(10, 2) NOT NULL,
        description TEXT null
    )ENGINE=InnoDB;

create table
    chambres (
        id int PRIMARY key AUTO_INCREMENT,
        hotel_id int,
        type_id int,
        FOREIGN key (hotel_id) REFERENCES hotels (id),
        FOREIGN key (type_id) REFERENCES typeChambres (id),
        numero INT NOT NULL UNIQUE,
        etage INT NOT NULL
    )ENGINE=InnoDB;

CREATE TABLE
    clients (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        telephone VARCHAR(20) NOT NULL,
        dateInscription DATE NOT NULL
    )ENGINE=InnoDB;

CREATE TABLE
    reservations (
        id INT PRIMARY KEY AUTO_INCREMENT,
        dateDebut DATE NOT NULL,
        dateFin DATE NOT NULL,
        statut VARCHAR(50) DEFAULT 'confirmee',
        client_id INT NOT NULL,
        chambre_id INT NOT NULL,
        FOREIGN KEY (client_id) REFERENCES clients (id),
        FOREIGN KEY (chambre_id) REFERENCES chambres (id)
    )ENGINE=InnoDB;

CREATE TABLE
    factures (
        id INT PRIMARY KEY AUTO_INCREMENT,
        montant DECIMAL(10, 2) NOT NULL,
        statut VARCHAR(50) DEFAULT 'en attente',
        methodePayment VARCHAR(50),
        reservation_id INT NOT NULL UNIQUE,
        FOREIGN KEY (reservation_id) REFERENCES reservations (id)
    )ENGINE=InnoDB;

CREATE TABLE
    Services (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(100) NOT NULL,
        description TEXT,
        prix DECIMAL(10, 2) NOT NULL
    ) ENGINE = InnoDB;

CREATE TABLE
    avis (
        id INT PRIMARY KEY AUTO_INCREMENT,
        note INT,
        titre VARCHAR(200),
        commentaire TEXT,
        dateAvis DATE NOT NULL,
        client_id INT,
        chambre_id INT,
        FOREIGN KEY (client_id) REFERENCES clients (id),
        FOREIGN KEY (chambre_id) REFERENCES chambres (id)
    )ENGINE=InnoDB;

CREATE TABLE
    ReservationService (
        id INT PRIMARY KEY AUTO_INCREMENT,
        dateCommande DATE NOT NULL,
        prixUnitaire DECIMAL(10, 2) NOT NULL,
        prixTotale DECIMAL(10, 2) NOT NULL,
        quantite INT NOT NULL,
        statut VARCHAR(50) DEFAULT 'commandee',
        reservation_id INT,
        service_id INT,
        FOREIGN KEY (reservation_id) REFERENCES reservations (id),
        FOREIGN KEY (service_id) REFERENCES Services (id)
    )ENGINE=InnoDB;




  