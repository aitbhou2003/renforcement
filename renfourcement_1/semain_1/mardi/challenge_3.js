const avis = [
    {
        pseudo: "MarieChef",
        note: 5,
        commentaire: "Délicieux! J'ai suivi la recette à la lettre et c'était parfait. À refaire sans hésiter!",
        date: "2024-01-15"
    },
    {
        pseudo: "JeanCuisine",
        note: 4,
        commentaire: "Très bon, mais un peu trop salé à mon goût. Sinon la recette est facile à suivre.",
        date: "2024-01-18"
    },
    {
        pseudo: "SophieFoodies",
        note: 5,
        commentaire: "Exceptionnelle! Mes invités ont adoré. Les photos du tuto sont très claires.",
        date: "2024-01-20"
    },
    {
        pseudo: "LucPâtissier",
        note: 3,
        commentaire: "C'est bon mais j'aurais aimé plus de détails sur la cuisson. Résultat inégal.",
        date: "2024-01-22"
    },
    {
        pseudo: "NatalieSaveurs",
        note: 5,
        commentaire: "Wow! Meilleure recette trouvée sur ce site. Facile et rapide!",
        date: "2024-01-25"
    },
    {
        pseudo: "PierreGourmet",
        note: 2,
        commentaire: "Décevant. Les ingrédients proposés n'étaient pas disponibles chez moi.",
        date: "2024-01-27"
    },
    {
        pseudo: "CécileRecettes",
        note: 4,
        commentaire: "Très sympa à préparer en famille. Peut-être un peu trop riche en matière grasse.",
        date: "2024-01-30"
    },
    {
        pseudo: "MarcCuisiner",
        note: 3,
        commentaire: "Correct, rien de spécial. Les temps de cuisson ne correspondent pas.",
        date: "2024-02-02"
    },
    {
        pseudo: "VirginieDesserts",
        note: 5,
        commentaire: "Absolument fantastique! Tous les détails sont là. Recette géniale!",
        date: "2024-02-05"
    },
    {
        pseudo: "AlainTraditional",
        note: 4,
        commentaire: "Bonne recette traditionnelle. Juste quelques améliorations possibles.",
        date: "2024-02-08"
    },
    {
        pseudo: "LauraCuisine",
        note: 2,
        commentaire: "Trop compliqué pour un résultat moyen. J'ai perdu beaucoup de temps.",
        date: "2024-02-10"
    },
    {
        pseudo: "ThierryMiels",
        note: 5,
        commentaire: "Parfait du début à la fin! J'ai recommencé 3 fois. Bravo au créateur!",
        date: "2024-02-12"
    },
    {
        pseudo: "AnnePatisserie",
        note: 3,
        commentaire: "Pas mal mais il y a de meilleures versions ailleurs. À essayer une fois.",
        date: "2024-02-15"
    },
    {
        pseudo: "FrédéricFoodies",
        note: 4,
        commentaire: "Très bon! Les photos aident beaucoup à comprendre les étapes.",
        date: "2024-02-18"
    },
    {
        pseudo: "IsabelleSaveurs",
        note: 5,
        commentaire: "Je fais cette recette tous les mois! Mes enfants en redemandent toujours!",
        date: "2024-02-20"
    }
];
// 1
let somme = avis.reduce((totale, a) => totale + a.note, 0)
let moyenne = (somme / avis.length).toFixed(1)
// 2
let one = two = three = four = five = 0
avis.forEach(avie => {
    switch (avie.note) {
        case 1:
            one++
            break;
        case 2:
            two++
            break;
        case 3:
            three++
            break;
        case 4:
            four++
            break;
        case 5:
            five++
            break;
        default:
            break;
    }
})
// 3
let avis_positifs = avis.filter(avie => avie.note >= 4)
let avis_negatifs = avis.filter(avie => avie.note <= 2)
// 4
// ma3reftch lih
avis.sort((a, b) => a.pars - b.date)
console.log(avis);

// 5

let longComment = avis[0].commentaire
avis.forEach(avie => {
    if (longComment.length < avie.commentaire.length) {
        longComment = avie.commentaire
    }
})

let longAvie = avis.find(avie => avie.commentaire == longComment)

// 6

console.log(`${moyenne}/5 base sur ${avis.length} avis -- ${avis_positifs.length} positifs, ${avis_negatifs.length} negatifs,${avis.length - avis_negatifs.length - avis_positifs.length} neutres`);






