-- 1
SELECT
    l.titre as livre,
    e.nom editeur,
    g.nom as genre
FROM
    livres l
    JOIN editeurs e on l.editeur_id = e.id
    JOIN genres g on g.id = l.genre_id
    -- 2
SELECT
    e.nom,
    COUNT(l.id) as nombre_livre
FROM
    livres l
    JOIN editeurs e on l.editeur_id = e.id
GROUP BY
    e.nom
ORDER BY
    nombre_livre DESC
    -- 3
SELECT
    g.nom,
    SUM(l.prix * v.quantite) as chiffre_affaire
FROM
    livres l
    JOIN genres g on g.id = l.genre_id
    JOIN ventes v on v.livre_id = l.id
GROUP by
    g.id
ORDER by
    chiffre_affaire DESC
    -- 4
SELECT
    e.nom
FROM
    editeurs e
    LEFT JOIN livres l ON l.editeur_id = e.id
    LEFT JOIN ventes v ON v.livre_id = l.id
WHERE
    v.id IS NULL;

-- 5
-- 6
SELECT
    v.client,
    l.titre,
    COUNT(g.nom) as N_genres
FROM
    ventes v
    JOIN livres l on l.id = v.livre_id
    JOIN genres g on g.id = l.genre_id
GROUP by
    v.client
HAVING
    N_genres >= 3
    -- 7
SELECT
    v.date_vente,
    sum(l.prix * v.quantite) as chifre_affaire
FROM
    ventes v
    JOIN livres l on l.id = v.livre_id
GROUP by
    v.date_vente
ORDER by
    v.date_vente
    -- 8SELECT l.titre , g.nom , AVG(l.prix) as prix_moyenne , l.annee_publication  FROM livres l 
SELECT
    l.titre,
    g.nom,
    AVG(l.prix) as prix_moyenne,
    l.annee_publication
FROM
    livres l
    JOIN genres g on g.id = l.genre_id
WHERE
    l.annee_publication > 2020
    and l.prix > (
        SELECT
            avg(l2.prix)
        FROM
            livres l2
        WHERE
            l2.genre_id = g.id
    )
GROUP by
    g.id