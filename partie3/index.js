//  Exercices

let nom = prompt("Entrer votre nom");

class Personnage{
    constructor(n){
        this.nom = n;
    }
    experience = 0;
    niveauDeVie =100;
    arme = [{nom:"fusil",dega:35},
            {nom:"couteau",dega:10},
            {nom:"machette",dega:20}
            ]

    presentation(){
        console.log(`je m'appelle ${this.nom} `)
    }
    Attaque(Personnage,arme){
        if(arme == "fusil"){
            Personnage.niveauDeVie = Personnage.niveauDeVie - 35
            console.log(`${this.nom} attaque avec ${arme} ${Personnage.nom} a qui il reste ${Personnage.niveauDeVie - 35} `);
        }
        
    }


}
let personne1 = new Personnage("lili");
let personne2 = new Personnage("grace");

personne1.Attaque(personne2,"fusil");


let utilisateur = prompt("Entrer votre nom");

class Acteur{
    constructor(nom,prenom,age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
start = true;
}
class Etudiant extends Acteur{
    constructor(nom,prenom,age,filière){
        super(nom,prenom,age);
        this.filière = filière;
    }
    note = [];

    calulMoyenne(){
        if(this.note.length< 1){
            console.log("Tu ne peut pas calculer la moyenne");
        }else {
            console.log("La moyenne est calculabre");
        }

    }


}
let afficher = new Etudiant("akossiwa","juvincia",18,"D");
console.log(afficher);
