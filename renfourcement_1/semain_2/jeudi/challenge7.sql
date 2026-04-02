-- 1
SELECT c.id , p.nom as patient , m.nom as medecin , c.diagnostic FROM consultations c 
JOIN medecins m 
on m.id = c.medecin_id
JOIN patients p 
on p.id = c.patient_id

-- 2

SELECT m.nom , COUNT(c.id) 'nombre consultation'  FROM consultations c
JOIN medecins m 
on m.id = c.medecin_id
GROUP by m.nom
ORDER by c.date_consultation

-- 3

SELECT p.nom , SUM(c.cout) cout_tolal  FROM consultations c
JOIN patients p 
on p.id = c.patient_id
GROUP By p.id


-- 4

SELECT p.id , p.nom  FROM consultations c 
RIGHT JOIN patients p 
on p.id = c.patient_id
WHERE c.patient_id IS null

-- 5

SELECT m.nom as medecin , COUNT(distinct p.id) as Numbre_patient  FROM consultations c 
JOIN medecins m 
on m.id = c.medecin_id
JOIN patients p 
on p.id = c.patient_id
GROUP by p.id
ORDER by Numbre_patient DESC
LIMIT 1