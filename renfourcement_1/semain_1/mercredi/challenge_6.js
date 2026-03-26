const equipes = [
    {
        nom: "Lions FC",
        points: 18,
        buts_pour: 15,
        buts_contre: 8,
        matchs_joues: 7
    },

    {
        nom: "Tigers United",
        points: 21,
        buts_pour: 20,
        buts_contre: 10,
        matchs_joues: 7
    },

    {
        nom: "Eagles Club",
        points: 12,
        buts_pour: 10,
        buts_contre: 12,
        matchs_joues: 7
    },

    {
        nom: "Sharks Team",
        points: 12,
        buts_pour: 8,
        buts_contre: 14,
        matchs_joues: 7
    },

    {
        nom: "Wolves Squad",
        points: 15,
        buts_pour: 13,
        buts_contre: 9,
        matchs_joues: 7
    },

    {
        nom: "Dragons FC",
        points: 6,
        buts_pour: 7,
        buts_contre: 16,
        matchs_joues: 7
    },

    {
        nom: "Falcons United",
        points: 17,
        buts_pour: 14,
        buts_contre: 11,
        matchs_joues: 7
    },

    {
        nom: "Panthers Club",
        points: 11,
        buts_pour: 9,
        buts_contre: 13,
        matchs_joues: 7
    }
];

// 2
let difference = []
equipes.forEach(equipe => {
    let dif = equipe.buts_pour - equipe.buts_contre
    difference.push({
        equipe: equipe.nom,
        difference: dif
    })
})
// 3
equipes.sort((a, b) => {
    if (a.points != b.points) {
        return b.points - a.points
    }

    let deffA = a.buts_pour - a.buts_contre
    let deffB = b.buts_pour - b.buts_contre
    return deffB - deffA



});

// 4
let i = 0;
equipes.forEach(equipe => {
    i++
    let diff = equipe.buts_pour - equipe.buts_contre
    console.log(i + '. ' + equipe.nom + ' — ' + equipe.points + ' pts (diff: ' + diff + ')');

})
// 5 - 6
function match(equipe1, equipe2) {
    let score1 = Math.floor(Math.random() * 6);
    let score2 = Math.floor(Math.random() * 6);

    equipe1.buts_pour += score1;
    equipe1.buts_contre += score2;
    equipe2.buts_pour += score2;
    equipe2.buts_contre += score1;

    if (score1 > score2) {
        equipe1.points += 3;
        equipe2.points -= 3
    } else if (score1 < score2) {
        equipe2.points += 3;
        equipe1.points -= 3
    } else {
        equipe1.points += 1;
        equipe2.points += 1
    }

}

// let equipe1 = equipes.find(equipe => equipe.nom == 'Tigers United');
// let equipe2 = equipes.find(equipe => equipe.nom == 'Lions FC');
// match(equipe1, equipe2);
// console.log(equipes);






