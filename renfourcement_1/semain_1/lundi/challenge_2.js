let notes = [12, 8, 15, 6, 18, 9, 14];
let somme = 0;
for (let i = 0; i < notes.length; i++) {
    somme += notes[i]
}
let moyenne = somme/notes.length
let max = notes[0];
for (let i = 0; i < notes.length; i++) {
    if (max < notes[i]) {
        max = notes[i]
    }
}

let min = notes[0];
for (let i = 0; i < notes.length; i++) {
    if (min > notes[i]) {
        min = notes[i]
    }
}
let success = 0;
for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        success++
    }
}

console.log('la moyenne est :'+moyenne);
console.log('la la note la plus haute : '+max);
console.log('la note la plus basse : '+min);
console.log("le nombre d'élèves qui ont la moyenne (≥ 10) : "+success);






