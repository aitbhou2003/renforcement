let perssone = {
    nom: 'abdellah',
    prenom: 'bhou',
    age: 22,
    ville: 'TanTan',
    email: 'abdellah@gmail.com'
}

console.log(`le nom complet : ${perssone.nom} ${perssone.prenom} \nl'age : ${perssone.age}\nla ville : ${perssone.ville} \nl'email : ${perssone.email}`);
perssone.ville = 'Benguerir'
perssone.telephone = '0826736182'
let keys = Object.keys(perssone);
let values = Object.values(perssone);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + " : " + values[i] + "\n");
}
