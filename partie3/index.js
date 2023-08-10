//  Exercices

let nom = prompt("Entrer votre nom");

class Personnage{
    constructor(n){
        this.nom = n;
    }
    experience = 0;
    niveauDeVie =100;
    arme = [{nom:"fusil",dega:100},
            {nom:"couteau",dega:10},
            {nom:"machette",dega:500}
            ]

    presentation(){
        console.log(`je m'appelle ${this.nom} `)
    }
}
let arme = (parametre) =>{
    for(let objet of parametre){
        console.log(`afficher les armes ${objet.nom},${objet.dega}`);
    }
}


