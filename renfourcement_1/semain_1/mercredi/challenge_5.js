const stockIngredients = [
    {
        nom: "Tomate",
        quantite: 50,
        unite: "kg",
        prix_unitaire: 1.50,
        seuil_alerte: 20,
        categorie: "legume"
    },
    {
        nom: "Poulet fermier",
        quantite: 6,
        unite: "kg",
        prix_unitaire: 12.00,
        seuil_alerte: 10,
        categorie: "viande"
    },
    {
        nom: "Oignons",
        quantite: 30,
        unite: "kg",
        prix_unitaire: 0.80,
        seuil_alerte: 15,
        categorie: "legume"
    },
    {
        nom: "Ail",
        quantite: 5,
        unite: "kg",
        prix_unitaire: 3.50,
        seuil_alerte: 2,
        categorie: "legume"
    },
    {
        nom: "Huile d'olive",
        quantite: 3,
        unite: "litres",
        prix_unitaire: 8.00,
        seuil_alerte: 5,
        categorie: "boisson"
    },
    {
        nom: "Sel fin",
        quantite: 10,
        unite: "kg",
        prix_unitaire: 0.30,
        seuil_alerte: 5,
        categorie: "épice"
    },
    {
        nom: "Poivre noir",
        quantite: 2,
        unite: "kg",
        prix_unitaire: 15.00,
        seuil_alerte: 1,
        categorie: "épice"
    },
    {
        nom: "Basilic frais",
        quantite: 3,
        unite: "kg",
        prix_unitaire: 6.00,
        seuil_alerte: 1,
        categorie: "legume"
    },
    {
        nom: "Beurre",
        quantite: 15,
        unite: "kg",
        prix_unitaire: 7.50,
        seuil_alerte: 5,
        categorie: "viande"
    },
    {
        nom: "Lait entier",
        quantite: 100,
        unite: "litres",
        prix_unitaire: 0.95,
        seuil_alerte: 30,
        categorie: "boisson"
    },
    {
        nom: "Farine blanche",
        quantite: 40,
        unite: "kg",
        prix_unitaire: 0.60,
        seuil_alerte: 15,
        categorie: "épice"
    },
    {
        nom: "Œufs frais",
        quantite: 200,
        unite: "pièces",
        prix_unitaire: 0.25,
        seuil_alerte: 50,
        categorie: "viande"
    }
];

// 2
stockIngredients.forEach(ing => {
    if (ing.quantite <= ing.seuil_alerte) {
        console.log(`le stock de ${ing.nom} est presque de finir`);

    }
});
// 3
stockIngredients.forEach(ing => {
    let totale = ing.quantite * ing.prix_unitaire;
    console.log(`la valeur totale du stock de ${ing.nom} : ${totale}`);
});
// 4
let totaleParCategorie = stockIngredients.reduce((t, ing) => {
    let key = ing.categorie;
    let somme = 0;
    if (!t[key]) {
        t[key] = []
    }
    somme += ing.quantite * ing.prix_unitaire
    t[key].push(somme)
    return t;
}, [])

let keys = Object.keys(totaleParCategorie);
keys.forEach(key => {
    totaleParCategorie[key].forEach(value => {
        let somme = 0;
        somme += value
        totaleParCategorie.key = somme
    })

})
console.log(totaleParCategorie);
// 5
function command(listIng) {
    let x = 0;
    listIng.forEach(ing => {
        let ingr = stockIngredients.find(ingrr => ingrr.nom == ing.nom)
        if (!ingr) {
            x++
            console.log(`${ing.nom} n'esxist pas`);
        } else if (ingr.quantite < ing.quantite) {
            x++
            console.log(`la contite de ${ing.nom} pas indufisan`);
        }

    })
    if (x == 0) {
        listIng.forEach(ing => {
            stockIngredients.forEach(ingr => {
                if (ingr.nom == ing.nom) {                    
                    ingr.quantite = ingr.quantite - ing.quantite
                }
            })
        })
        return 'la command passer avec success'
    }

}
// let commande = [
//     {
//         nom: 'Farine blanche',
//         quantite: 13
//     },
//     {
//         nom: 'Lait entier',
//         quantite: 10
//     }
// ]
// console.log(command(commande));


// 6
let courses = stockIngredients.filter(ing=>ing.quantite<=ing.seuil_alerte)
courses.forEach(coure=>{
    coure.commander = coure.seuil_alerte *2
})
console.log(courses);








