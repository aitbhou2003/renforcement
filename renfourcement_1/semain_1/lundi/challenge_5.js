let etudiants = [
    {
        nom: 'abdellah',
        prenom: 'bhou',
        age: 22,
        moyenne: 15,
    },
    {
        nom: 'aymen',
        prenom: 'omaala',
        age: 23,
        moyenne: 8,
    },
    {
        nom: 'aymen',
        prenom: 'jaafouri',
        age: 18,
        moyenne: 13,
    },
    {
        nom: 'ahmed',
        prenom: 'salek',
        age: 26,
        moyenne: 5,
    },
    {
        nom: 'hanane',
        prenom: 'limimi',
        age: 22,
        moyenne: 12,
    },
    {
        nom: 'salma',
        prenom: 'mimo',
        age: 26,
        moyenne: 16,
    }
]
console.log('les étudiants qui ont une moyenne supérieure ou égale à 12 : ');

etudiants.forEach(etudiant => {
    if (etudiant.moyenne >= 12) {
        console.log(etudiant.prenom + " " + etudiant.nom);

    }
})

etudiants.sort((a, b) => a.age - b.age);
console.log(etudiants);
function searchWithName(name) {
    let etudiant =  etudiants.find(etudiant => etudiant.nom == name);
    if (etudiant) {
        return etudiant
    }
    return "Étudiant non trouvé"
}
console.log(searchWithName('abdellah'));

