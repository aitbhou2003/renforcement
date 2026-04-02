CREATE TABLE
    utilisateurs (
        id int PRIMARY KEY AUTO_INCREMENT,
        firstname varchar(50) not null,
        lastname varchar(50) not null,
        email varchar(200) not null,
        password varchar(250) not null,
        username varchar(50) not null,
        dateNaiisance date not null
    ) ENGINE = INNODB;

CREATE TABLE
    publications (
        id int PRIMARY KEY AUTO_INCREMENT,
        firstname text not null,
        datePublication datetime DEFAULT CURRENT_TIMESTAMP,
        user_id int,
        FOREIGN KEY (user_id) REFERENCES utilisateurs (id)
    ) ENGINE = INNODB;

create table
    commentaires (
        id int PRIMARY KEY AUTO_INCREMENT,
        commentaire varchar(200) not null,
        publication_id int,
        user_id int,
        FOREIGN KEY (user_id) REFERENCES utilisateurs (id),
        FOREIGN KEY (publication_id) REFERENCES publications (id)
    ) ENGINE = INNODB;

create table
    likes (
        id int PRIMARY KEY AUTO_INCREMENT,
        publication_id int UNIQUE,
        user_id int UNIQUE,
        FOREIGN KEY (user_id) REFERENCES utilisateurs (id),
        FOREIGN KEY (publication_id) REFERENCES publications (id)
    ) ENGINE = INNODB;

create table
    abonnements (
        id int PRIMARY KEY AUTO_INCREMENT,
        dateAbonnememnt datetime DEFAULT CURRENT_TIMESTAMP,
        follower_id int UNIQUE,
        following_id int UNIQUE,
        FOREIGN KEY (follower_id) REFERENCES utilisateurs (id),
        FOREIGN KEY (following_id) REFERENCES utilisateurs (id)
    ) ENGINE = INNODB;

create table
    messages (
        id int PRIMARY KEY AUTO_INCREMENT,
        message text not null,
        dateEnvoye datetime DEFAULT CURRENT_TIMESTAMP,
        sender_id int,
        reciver_id int,
        FOREIGN KEY (sender_id) REFERENCES utilisateurs (id),
        FOREIGN KEY (reciver_id) REFERENCES utilisateurs (id)
    ) ENGINE = INNODB;