const tauxChange = {
    USD: 1.08,
    GBP: 0.86,
    MAD: 10.85,
    JPY: 162.5,
    CAD: 1.47
};
let keys = Object.keys(tauxChange);
let historique = []

function convertir(montant, deviseSource, deviseCible) {
    let toEuros = 0
    let toCible = 0
    for (let i = 0; i < keys.length; i++) {
        // console.log(keys[i], i);
        // console.log(deviseSource, i);
        if (deviseSource == keys[i]) {
            toEuros = (montant * tauxChange.USD) / tauxChange[deviseSource];
            toCible = (toEuros * tauxChange[deviseCible]) / tauxChange.USD
            historique.push({
                date: new Date(),
                montant: montant,
                deviseSource: deviseSource,
                deviseCible: deviseCible,
                TRansactionResult: toCible
            })
            return `${montant} ${deviseSource} en Euros = ${toEuros} USD et en ${deviseCible} = ${toCible} ${deviseCible} `
        }


    }
}

console.log(convertir(100, 'MAD', 'GBP'));

// 3

function convertirPanier(panier, deviseSource, deviseCible) {

    let toEuros = 0
    let toCible = 0
    let result = []
    for (let i = 0; i < keys.length; i++) {
        if (deviseSource == keys[i]) {
            // consol   e.log(1);
            for (let j = 0; j < panier.length; j++) {
                // console.log(2);
                toEuros = (panier[j] * tauxChange.USD) / tauxChange[deviseSource];
                toCible = (toEuros * tauxChange[deviseCible]) / tauxChange.USD
                result.push(toCible);
            }
            historique.push({
                date: new Date(),
                montant: panier,
                deviseSource: deviseSource,
                deviseCible: deviseCible,
                TRansactionResult: result
            })
            return result
        }

    }
}
let p = [100, 200]
console.log(convertirPanier([100, 200], 'MAD', 'GBP'));
// 4
function meilleurTaux(montant, deviseSource) {
    let USD = 0
    let GBP = 0
    let MAD = 0
    let JPY = 0
    let CAD = 0
    for (let i = 0; i < keys.length; i++) {
        // if (deviseSource == keys[i]) {
        USD = (montant * tauxChange.USD) / tauxChange[deviseSource];
        GBP = (USD * tauxChange.GBP) / tauxChange.USD
        MAD = (USD * tauxChange.MAD) / tauxChange.USD
        JPY = (USD * tauxChange.JPY) / tauxChange.USD
        CAD = (USD * tauxChange.CAD) / tauxChange.USD
        // }
        historique.push({
            date: new Date(),
            montant: montant,
            deviseSource: deviseSource,
            deviseCible: 'tous les devise posible',
            TRansactionResult: [USD, GBP, MAD, JPY, CAD]
        })
        return `devise source = ${montant} ${deviseSource}\n
        =>  ${USD} USD \n
        =>  ${GBP} GBP \n
        =>  ${MAD} MAD \n
        =>  ${JPY} JPY \n
        =>  ${CAD} CAD \n `

    }
}

console.log(meilleurTaux(100, 'MAD'));

// 6
console.log(historique);
// function statistiques() {
//     const map = new Map();
//     historique.forEach(i => {
//         map.set(i.deviseCible, (map.get(i.deviseCible) || 0) + 1)
//     })
//     console.log(map);
// }






