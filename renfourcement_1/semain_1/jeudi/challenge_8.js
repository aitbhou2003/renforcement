let panier = [
    {
        produit: {
            id: 1,
            nom: "Clavier",
            prix: 200,
            stock_disponible: 15
        },
        quantite: 2
    },

    {
        produit: {
            id: 2,
            nom: "Souris",
            prix: 100,
            stock_disponible: 30
        },
        quantite: 1
    },

    {
        produit: {
            id: 3,
            nom: "Écran",
            prix: 1500,
            stock_disponible: 10
        },
        quantite: 1
    },

    {
        produit: {
            id: 4,
            nom: "Casque",
            prix: 300,
            stock_disponible: 20
        },
        quantite: 3
    },

    {
        produit: {
            id: 5,
            nom: "Webcam",
            prix: 250,
            stock_disponible: 12
        },
        quantite: 1
    },

    {
        produit: {
            id: 6,
            nom: "Microphone",
            prix: 400,
            stock_disponible: 8
        },
        quantite: 2
    },

    {
        produit: {
            id: 7,
            nom: "Chaise gaming",
            prix: 1200,
            stock_disponible: 5
        },
        quantite: 1
    },

    {
        produit: {
            id: 8,
            nom: "Tapis de souris",
            prix: 80,
            stock_disponible: 25
        },
        quantite: 2
    },

    {
        produit: {
            id: 9,
            nom: "Disque dur",
            prix: 600,
            stock_disponible: 10
        },
        quantite: 1
    },

    {
        produit: {
            id: 10,
            nom: "Clé USB",
            prix: 150,
            stock_disponible: 50
        },
        quantite: 4
    }
];
// 2

function addProduct(product) {
    let pr = panier.find(p => p.produit.nom == product.produit.nom);
    if (pr) {
        if ((pr.quantite + product.quantite) >= pr.produit.stock_disponible) {
            pr.quantite = pr.produit.stock_disponible
        }
        pr.quantite += product.quantite
    } else {
        product.produit.id = panier.length + 1
        panier.push(product)
    }
}

// 4
function removeProduct(nom) {
    panier = panier.filter(p => p.produit.nom != nom);
}
removeProduct("Disque dur")
console.log(panier);

// 5
function sousTotal(id) {
    let artict = panier.find(p => p.produit.id == id);
    if (artict) {
        return artict.quantite * artict.produit.prix
    } else {
        return false
    }
}

function totale() {
    let total = 0;

    panier.forEach(p => {
        total += p.produit.prix * p.quantite
    });

    return total
}

// 6
let total = totale()


function promo() {
    if (total <= 50) {
        return `"BIENVENUE" = -15% sur le premier achat, "NOEL2025" = -${total * 0.15} `
    } else {
        return `"BIENVENUE" = -15% sur le premier achat, "NOEL2025" = -${total * 0.15}€, "LIVGRATUITE" = -7€ `
    }
}

console.log(promo());
// 7

function recapitulatif() {
    panier.forEach(p => {

        let sous_total = sousTotal(p.produit.id)
        let tva = sous_total * 0.2
        let ttc = sous_total + tva

        if (sous_total > 50) {

            console.log(`${p.produit.nom} => totale: ${sous_total}€ , tva: ${tva}€ , ttc: ${ttc},-7€ livraison gratuits `)
        } else {
            console.log(`${p.produit.nom} => totale: ${sous_total}€ , tva: ${tva}€ , ttc: ${ttc} `
            );

        }

    });
}

console.log(recapitulatif());






