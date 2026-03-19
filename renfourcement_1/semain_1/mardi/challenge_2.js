const ventes = [
    { mois: "Janvier", chiffre_affaires: 42000, nb_clients: 320, ville: "Paris" },
    { mois: "Février", chiffre_affaires: 38500, nb_clients: 280, ville: "Lyon" },
    { mois: "Mars", chiffre_affaires: 55000, nb_clients: 410, ville: "Paris" },
    { mois: "Avril", chiffre_affaires: 48000, nb_clients: 360, ville: "Marseille" },
    { mois: "Mai", chiffre_affaires: 62000, nb_clients: 480, ville: "Paris" },
    { mois: "Juin", chiffre_affaires: 71000, nb_clients: 530, ville: "Lyon" },
    { mois: "Juillet", chiffre_affaires: 85000, nb_clients: 650, ville: "Paris" },
    { mois: "Août", chiffre_affaires: 78000, nb_clients: 610, ville: "Marseille" },
    { mois: "Septembre", chiffre_affaires: 64000, nb_clients: 500, ville: "Lyon" },
    { mois: "Octobre", chiffre_affaires: 52000, nb_clients: 390, ville: "Paris" },
    { mois: "Novembre", chiffre_affaires: 45000, nb_clients: 340, ville: "Marseille" },
    { mois: "Décembre", chiffre_affaires: 92000, nb_clients: 720, ville: "Paris" }
];

// 1
let chiffre_affaires_totale = ventes.reduce((total, vente) => total + vente.chiffre_affaires, 0);
console.log(chiffre_affaires_totale);
// 2
let chiffre_affaires_moyen = chiffre_affaires_totale / 12;
console.log(chiffre_affaires_moyen);
// 3
let max = ventes[0].chiffre_affaires;
let minClien = ventes[0].nb_clients;
let moi_moins_client;
ventes.forEach(vente => {
    if (max < vente.chiffre_affaires) {
        max = vente.chiffre_affaires
    }
    if (minClien > vente.nb_clients) {
        minClien = vente.nb_clients
        moi_moins_client = vente.mois
    }
})

let vente_meilleur = ventes.find(vente => vente.chiffre_affaires == max);
let moi_meilleur = vente_meilleur.mois;
console.log(moi_meilleur);
// 5
console.log(moi_moins_client);
// 5
let ventes_mois = ventes.filter(vente => vente.chiffre_affaires > 50000);
// 6
ventes_mois.forEach(vente => {
    console.log(`Ville : ${vente.ville}   CA : ${vente.chiffre_affaires} €   le nombre total de clients : ${vente.nb_clients}`);
})
// 7
ventes_mois.sort((a, b) => b.chiffre_affaires - a.chiffre_affaires)
// 8


for (let i = 1, j = 0; i < ventes.length; i++, j++) {

    let croissance = ventes[i].chiffre_affaires - ventes[j].chiffre_affaires;
    console.log(croissance);
}
