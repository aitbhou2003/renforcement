let reservations = [
    {
        id: 1,
        nom_client: "Ali",
        nombre_personnes: 4,
        date: "2026-03-30",
        heure: "20:00",
        statut: "confirmée",
        telephone: "0612345678"
    },
    {
        id: 2,
        nom_client: "Sara",
        nombre_personnes: 2,
        date: "2026-03-30",
        heure: "21:00",
        statut: "en attente",
        telephone: "0623456789"
    },
    {
        id: 3,
        nom_client: "Youssef",
        nombre_personnes: 6,
        date: "2026-03-31",
        heure: "19:30",
        statut: "annulée",
        telephone: "0634567890"
    }
];

// 2
let maxPlace = 30;
function reservation(reserve) {
    if (reservations.length <= 30) {
        reserv.id = reservations.length + 1
        reserve.statut = "confirmée"
        reservations.push(reserve)
    }

    reserve.id = reservations.length + 1
    reserve.statut = "en attente"
}
// 3
function change(reserve) {
    let R = reservations.find(r => r.nom_client == reserve.nom_client);
    R.statut = "annulée";
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].statut == "en attente") {
            reservations[i].statut = "confirmée"
            return 0
        }
    }
}

// 4

function listerReservationsParDate(dateRecherchee) {
    return reservations
        .filter(res => res.date === dateRecherchee).sort((a, b) => {
            let date1 = a.heure.split(':')
            let date2 = b.heure.split(':')

            if (parseInt(date1[0]) != parseInt(date2[0])) {
                return parseInt(date1[0]) - parseInt(date2[0])
            }
            return parseInt(date1[1]) - parseInt(date2[1])
        });
}

console.log(listerReservationsParDate('2026-03-30'));
// 5
let numPlace = 0;
reservations.forEach(res => {
    
    if (res.statut == "confirmée") {
        numPlace += res.nombre_personnes
    }
})

let taux  = numPlace/30;
// 6




