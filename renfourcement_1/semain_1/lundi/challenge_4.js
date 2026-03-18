let articles = [
    {
        nom: 'lait',
        qunatity: 20,
        prixUnitaire: 4,
    },
    {
        nom: 'pain',
        qunatity: 100,
        prixUnitaire: 2,
    },
    {
        nom: 'confetur',
        qunatity: 30,
        prixUnitaire: 7,
    },
    {
        nom: 'ton',
        qunatity: 16,
        prixUnitaire: 12,
    },
    {
        nom: 'jus',
        qunatity: 25,
        prixUnitaire: 14,
    }
]

articles.forEach(article => {
    console.log(article.nom + " x " + article.qunatity + " = " + article.prixUnitaire * article.qunatity + "\n");
})

let TVA = 0;
let TTC = 0;
articles.forEach(article=>{
    TVA += article.prixUnitaire*0.2
    TTC += article.prixUnitaire+TVA
})

console.log('TVA totale : '+TVA+'\nTTC totale : '+TTC);

