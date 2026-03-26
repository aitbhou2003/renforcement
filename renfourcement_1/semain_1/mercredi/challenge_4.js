const contacts = [
    {
        nom: "Marie Dupont",
        entreprise: "TechSoft Solutions",
        email: "marie.dupont@techsoft.fr",
        telephone: "06 12 34 56 78",
        ville: "Paris",
        adresse: {
            rue: "123 Avenue des Champs",
            code_postal: "75008",
            ville: "Paris",
            pays: "France"
        }
    },
    {
        nom: "Jean Martin",
        entreprise: "Digital Innovations",
        email: "jean.martin@digital.fr",
        telephone: "06 23 45 67 89",
        ville: "Lyon",
        adresse: {
            rue: "45 Rue de la République",
            code_postal: "69000",
            ville: "Lyon",
            pays: "France"
        }
    },
    {
        nom: "Sophie Bernard",
        entreprise: "EuroTrade Group",
        email: "sophie.bernard@eurotrade.be",
        telephone: "+32 2 567 89 01",
        ville: "Bruxelles",
        adresse: {
            rue: "789 Boulevard du Roi",
            code_postal: "1000",
            ville: "Bruxelles",
            pays: "Belgique"
        }
    },
    {
        nom: "Pierre Leclerc",
        entreprise: "Global Consulting",
        email: "pierre.leclerc@globalconsult.ch",
        telephone: "+41 22 345 67 89",
        ville: "Genève",
        adresse: {
            rue: "567 Rue de Lausanne",
            code_postal: "1201",
            ville: "Genève",
            pays: "Suisse"
        }
    },
    {
        nom: "Isabelle Moreau",
        entreprise: "Fashion Design Co.",
        email: "isabelle.moreau@fashiondesign.fr",
        telephone: "06 34 56 78 90",
        ville: "Marseille",
        adresse: {
            rue: "234 Boulevard de la Corniche",
            code_postal: "13008",
            ville: "Marseille",
            pays: "France"
        }
    },
    {
        nom: "Luc Beaumont",
        entreprise: "Amsterdam Tech Hub",
        email: "luc.beaumont@amstertech.nl",
        telephone: "+31 20 123 45 67",
        ville: "Amsterdam",
        adresse: {
            rue: "901 Prinsengracht",
            code_postal: "1015 DT",
            ville: "Amsterdam",
            pays: "Pays-Bas"
        }
    }
];
// 2
contacts.forEach(contact => {
    let adress = contact.adresse
    console.log(`nom : ${contact.nom} - rue : ${adress.rue} - code postale : ${adress.code_postal} - ville : ${adress.ville} - pays : ${adress.pays}`);
})
// 3
let parVille = contacts.reduce((t, contact) => {
    const key = contact.ville;
    if (!t[key]) {
        t[key] = []
    }
    t[key].push(contact);
    return t
}, {})

console.log(parVille);
// 4
function searchContact(entreprise) {
    let contact = contacts.find(contact => contact.entreprise === entreprise);
    return [contact.telephone, contact.email];
}

console.log(searchContact('Digital Innovations'));
// 5
function updateAdress(name, rue, code_postal, ville, pays) {
    contacts.forEach(contact => {
        if (contact.nom == name) {
            contact.ville = ville
            contact.adresse.code_postal = code_postal;
            contact.adresse.rue = rue;
            contact.adresse.ville = ville;
            contact.adresse.pays = pays
            return 'contact modifier avec success'
        }
    });
}

console.log(updateAdress('Luc Beaumont','rue 16',82000,'tantan','maroc'));
// 6

contacts.forEach(contact => {
    contact['dernierContact'] = new Date(8.64e15).toString();
});
console.log(contacts);






