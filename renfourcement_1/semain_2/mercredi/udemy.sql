CREATE TABLE
    roles (
        id int PRIMARY KEY AUTO_INCREMENT,
        role varchar(30) not null
    ) ENGINE = INNODB;

CREATE table
    utilisaterus (
        id int PRIMARY KEY AUTO_INCREMENT,
        firstname varchar(50) NOT null,
        lastname varchar(50) NOT null,
        email varchar(200) NOT null,
        password varchar(250) not null,
        role_id int,
        FOREIGN key (role_id) REFERENCES roles (id)
    ) ENGINE = INNODB;

CREATE TABLE
    categories (
        id int PRIMARY KEY AUTO_INCREMENT,
        name varchar(50) not null
    ) ENGINE = INNODB;

CREATE table
    cours (
        id int PRIMARY KEY AUTO_INCREMENT,
        titre varchar(50) not null,
        description varchar(500) null,
        prix decimal(10, 2) not null CHECK (prix > 0),
        dateCreation timestamp DEFAULT CURRENT_TIMESTAMP,
        categorie_id int,
        formateur_id int,
        FOREIGN KEY (categorie_id) REFERENCES categories (id),
        FOREIGN KEY (formateur_id) REFERENCES utilisaterus (id)
    ) ENGINE = INNODB;

create TABLE
    modules (
        id int PRIMARY KEY AUTO_INCREMENT,
        titre varchar(50) not null,
        description varchar(500) null,
        coure_id int,
        FOREIGN KEY (coure_id) REFERENCES cours (id)
    ) ENGINE = INNODB;

CREATE TABLE
    lecons (
        id int PRIMARY KEY AUTO_INCREMENT,
        titre varchar(50) not null,
        contenue text not null,
        module_id int,
        FOREIGN KEY (module_id) REFERENCES modules (id)
    ) ENGINE = INNODB;

CREATE TABLE
    inscription (
        id INT PRIMARY KEY AUTO_INCREMENT,
        apprenant_id INT UNIQUE,
        coure_id INT UNIQUE,
        dateInscription DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (apprenant_id) REFERENCES utilisaterus (id),
        FOREIGN KEY (coure_id) REFERENCES cours (id)
    ) ENGINE = INNODB;

CREATE TABLE
    avis (
        id INT PRIMARY KEY AUTO_INCREMENT,
        note INT NOT NULL CHECK (note BETWEEN 1 AND 5),
        commentaire TEXT,
        apprenant_id INT NOT NULL,
        cours_id INT NOT NULL,
        FOREIGN KEY (apprenant_id) REFERENCES utilisaterus (id),
        FOREIGN KEY (cours_id) REFERENCES cours (id)
    );