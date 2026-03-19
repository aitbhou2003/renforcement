let chansons = [
    {
        titre: 'titre 1',
        artiste: 'art 1',
        duree: 193,
        genre: 'rock'
    },
    {
        titre: 'tittre 2',
        artiste: 'art 2',
        duree: 182,
        genre: 'tarab'
    },
    {
        titre: 'titre 7',
        artiste: 'art 7',
        duree: 200,
        genre: 'rap'
    },
    {
        titre: 'titre 14',
        artiste: 'artist 14',
        duree: 210,
        genre: 'rock'
    },
    {
        titre: 'titre 0',
        artiste: 'artist 0',
        duree: 150,
        genre: 'rien'
    },
    {
        titre: 'titre 77',
        artiste: 'artist 77',
        duree: 500,
        genre: 'rap'
    }
]
// 1
chansons.forEach(chanson => {
    console.log(chanson.titre);
})
// 2
let rock = []
chansons.forEach(chanson => {
    if (chanson.genre == 'rock') {
        rock.push(chanson)
    }
})
// 3
let minut = chansons.map(chanson => {
    return {
        titre: chanson.titre,
        artiste: chanson.artiste,
        duree: parseInt(chanson.duree / 60) + ":" + chanson.duree % 60,
        genre: chanson.genre
    }
})
// 4
let sommeS = 0;
chansons.forEach(chanson => {
    sommeS += chanson.duree
})
let sommeM = parseInt(sommeS / 60)
// 5
let max = chansons[0].duree
chansons.forEach(chanson => {
    if (max < chanson.duree) {
        max = chanson.duree
    }

})
let longChanson = chansons.find(chanson => chanson.duree == max);
// 6
let conteur = 0;
let jazConteur = 0;
chansons.forEach(chanson => {
    if ((chanson.duree / 60) >= 6) {
        conteur++
    }
    if (chanson.genre == 'jazz') {
        jazConteur++
    }
})

if (conteur == 0) {
    console.log('touts les chansons durent moin de 6 minut');
} else {
    console.log('pas tous les chansons durent moin de 6 minut');
}

// 7

if (jazConteur == 0) {
    console.log('pas de chansons de genre jszz ');
} else {
    console.log('il y a au moins une chanson est du genre "Jazz"');
}

// 8

chansons.sort((a, b) => a.duree - b.duree);
console.log(chansons);







