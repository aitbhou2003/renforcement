
let utilisateurs = [
    {
        id: 1,
        pseudo: "AliShop",
        email: "ali@mail.com",
        role: "vendeur",
        note: 4.5,
        solde: 1200
    },
    {
        id: 2,
        pseudo: "SaraBuy",
        email: "sara@mail.com",
        role: "acheteur",
        note: 4.8,
        solde: 800
    },
    {
        id: 3,
        pseudo: "YassineTech",
        email: "yassine@mail.com",
        role: "vendeur",
        note: 4.2,
        solde: 1500
    },
    {
        id: 4,
        pseudo: "NadiaShop",
        email: "nadia@mail.com",
        role: "vendeur",
        note: 4.6,
        solde: 950
    },
    {
        id: 5,
        pseudo: "OmarBuyer",
        email: "omar@mail.com",
        role: "acheteur",
        note: 4.1,
        solde: 600
    },
    {
        id: 6,
        pseudo: "LinaMarket",
        email: "lina@mail.com",
        role: "vendeur",
        note: 4.9,
        solde: 2000
    },
    {
        id: 7,
        pseudo: "HassanDeals",
        email: "hassan@mail.com",
        role: "acheteur",
        note: 3.9,
        solde: 400
    },
    {
        id: 8,
        pseudo: "ImaneStore",
        email: "imane@mail.com",
        role: "vendeur",
        note: 4.7,
        solde: 1700
    }
];
// 2
let annonce = []
let annonce_id = 0;
function publishMission(id, titre, description, prix, categorie, etat, statut) {
    let user = utilisateurs.find(user => user.id == id);
    if (user.role == "vendeur") {
        annonce.push({
            id: annonce_id++,
            vendeur_id: id,
            titre: titre,
            description: description,
            prix: prix,
            categorie: categorie,
            etat: etat,
            statut: statut,
            date_publication: new Date().toLocaleDateString()
        })
    } else {
        return "tu n'a pas un vendeure"
    }
}

publishMission(8, 'casque', 'casque bien', 150, 'electronique', 'bien', 'disponible');

function modifierPrix(id, newPrice) {
    let an = annonce.find(a => a.id == id);
    an.prix = newPrice
}
modifierPrix(0, 160)

function dletAnnomce(id) {
    annonce = annonce.filter(a => a.id != id)
}
dletAnnomce(0)
console.log(annonce);

// 3

function rechercher(filtres) {
    let result = annonce;

    if (filtres.categorie) {
        result = result.filter(a => a.categorie === filtres.categorie);
    }

    if (filtres.prixMin !== undefined) {
        result = result.filter(a => a.prix >= filtres.prixMin);
    }

    if (filtres.prixMax !== undefined) {
        result = result.filter(a => a.prix <= filtres.prixMax);
    }

    if (filtres.etat) {
        result = result.filter(a => a.etat === filtres.etat);
    }

    if (filtres.vendeur_id) {
        result = result.filter(a => a.vendeur_id === filtres.vendeur_id);
    }

    if (filtres.tri === "prix") {
        result.sort((a, b) => a.prix - b.prix);
    }

    if (filtres.tri === "date") {
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (filtres.tri === "note") {
        result.sort((a, b) => {
            let v1 = utilisateurs.find(u => u.id === a.vendeur_id);
            let v2 = utilisateurs.find(u => u.id === b.vendeur_id);
            return v2.note - v1.note;
        });
    }
    return result;
}

// console.log(rechercher({
//     categorie : 
// }));


// 4
let transactions = []
let idTransaction = 0
function acheterAnnonce(acheteur_id, annonce_id) {
    let acheteur = utilisateurs.find(u => u.id === acheteur_id && u.role === "acheteur");
    let annonce = annonces.find(a => a.id === annonce_id);

    if (!acheteur || !annonce) return false;

    if (annonce.statut !== "disponible") {
        return console.log("Annonce pas disponible");
    }

    if (acheteur.solde < annonce.prix) {
        return console.log("Solde insuffisant");
    }

    let vendeur = utilisateurs.find(u => u.id === annonce.vendeur_id);

    let commission = annonce.prix * 0.05;
    let montantVendeur = annonce.prix - commission;

    acheteur.solde -= annonce.prix;
    vendeur.solde += montantVendeur;
    vendeur.ventes++;

    annonce.statut = "vendu";

    transactions.push({
        id: idTransaction++,
        date: new Date(),
        acheteur_id: acheteur_id,
        vendeur_id: vendeur.id,
        annonce_id: annonce_id,
        montant: annonce.prix,
        commission: commission
    });

}

// 5

function noterVendeur(transaction_id, note, commentaire) {
    let t = transactions.find(tr => tr.id === transaction_id);
    if (!t) return  "Transaction pas trouver";

    let vendeur = utilisateurs.find(u => u.id === t.vendeur_id);

    let dejaNote = vendeur.avis.find(a => a.transaction_id === transaction_id);
    if (dejaNote) return "geja note";

    vendeur.avis.push({
        transaction_id : transaction_id,
        note: note,
        commentaire: commentaire
    });

    let total = vendeur.avis.reduce((sum, a) => sum + a.note, 0);
    vendeur.note = total / vendeur.avis.length;

}

function profilVendeur(id) {
    let v = utilisateurs.find(u => u.id === id);
    console.log({
        pseudo: v.pseudo,
        note: v.note,
        ventes: v.ventes,
        avis: v.avis
    });
}

// 6

function statistiques() {
    let totalAnnonces = annonces.length;

    let parStatut = {
        disponible: annonces.filter(a => a.statut === "disponible").length,
        vendu: annonces.filter(a => a.statut === "vendu").length
    };

    let chiffreAffaires = transactions.reduce((sum, t) => sum + t.montant, 0);
    let commissionTotale = transactions.reduce((sum, t) => sum + t.commission, 0);


    let categories = [];
    annonces.forEach(a => {
        categories.push(a)
    });

   
    console.log({
        totalAnnonces,
        parStatut,
        chiffreAffaires,
        commissionTotale,
    });
}
