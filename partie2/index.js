/* //fonction

/* function direBonjour(){
    console.log("Bonjour!!!!");
}

direBonjour();

function direBonjourAmi(nomAmi){
//console.log("Bonjour" + nombre);
console.log(`Bonjour ${nomAmi}`);
}

direBonjour("Famous");

functionchiffreSacré(nomAmi){
    console.log(`Mon chiffre sacré est ${nombre}`);
}
chiffreSacré("Abalo"); */



/* function nomPrenom(){
    let nom = prompt("Entrer votre nom")
    let prenom = prompt("Entrer votre prenom")
    console.log(`nom:${nom} ,prenom:${prenom}`)
}
 
/* presentation(); */
/* function nomPrenom() */
 






/* function direBonjour(){
    console.log("Bonjour!!!!");
}
 //direBonjour();


function Bonjour(){
    return "Bonjour!!!!";
}

let salutation = Bonjour();
console.log(salutation); */


/* function addiction(nbr1 , nbr2){
    return nbr1 + nbr2;
}
let nombre = addiction(2,2);

for(let i= 0;i>13;i++){
    console.log(nombre * i);
} */


/* let direBonjour = () =>{
    console.log("Bonjour!!!!");
};
let  direBonjourAmi = (nomAmi) => console.log("Bonjour!!!" + nomAmi);
direBonjour(); */
/* 
 let mesFilms = ["Mewer", "Wakanda","Avatar"]; */
/* mesFilms[0]; //premier element
mesFilms.length; // la taille du tableau 
mesFilms.push("ooooo"); //pour enregistrer dans le tableau ** la suite
console.log(mesFilms);
mesFilms.pop(); // suprimer le dernier element
console.log(mesFilms);
mesFilms.splice(1, 1); // supprimer un element a partie de l'indice 1
console.log(mesFilms); 
 */

 

/* let randomTab =[15,true, ["lili","Rose"],{ nom: "kiella"}, () => {}];

console.log(randomTab);
console.log(randomTab [1]);
console.log(randomTab [1] [2]); 
 */

/* for(let i= 0;i < mesFilms.length; i++){
    console.log(mesFilms[i]);
}

for(let films of mesFilms){
    console.log(`j'ai regarder de film ${films}`);
}  */

/* let etudiant = {
    nom: "ezechiella",
    age: 55,
    statusMatrimonial: "CELIBATAIRE",
     */
    /* presentation(){

    } */

    /*presentation(){
        console.log(`je suis ${this.nom} et je suis agé ${this.age} ans , mon statu matrimonial est ${this.statusMatrimonial}`);
    }
};

etudiant.presentation();

//etudiant.nom;
/* console.log(etudiant);

etudiant.nom = "liliane";
console.log(etudiant.nom); */






















 /* let tableauNote =[1, 2, 3, 4, 5, 6, 7];





let parcourTableau = (liste) =>{
    for(let note of liste){
        if(note % 2 != 0 )
        console.log(`voici les notes impaire ${note}`)   
    } 
}

parcourTableau(tableauNote) */


















/* let tableau = [{nom:"jesus",année:2005} ,
                {nom:"Dieu",année:1998},
                {nom:"God",année:2003},
                {nom:"avatar",année:2004}
            ]


let films = (parametre) =>{
    for(let objet of parametre){
        console.log(`afficher les films ${objet.nom , objet.année} `);
    }
}
films(tableau);
 */

    





//POO

// La classe mère 
 class Personne{
    constructor(n,p){
        this.nom = n;
        this.prenom = p;
    }
   isLiving = true;
    
presentation(){
    console.log(`je m'appelle ${this.nom} ${this.prenom}`)
}
}


//appelation de la classe  fille 

class proffesseur extends Personne{
    constructor(nom,prenom,filière){
        super(nom,prenom);
        this.filière = filière;
    }
    frequente = true;

} 
let agbodjan = new proffesseur("Keleleng","Eric","D");
console.log(agbodjan);

class cour extends proffesseur{
    constructor(nom,prenom,idCour){
        super(nom,prenom,filière);
        this.idCour = idCour;
    }
}
let informatique = new cour("Algorithme","alg","R110");
console.log(informatique);






let franklin = new Personne("franklin","Delano");
console.log(franklin);

let audrey = new Personne("audrey","ayawa");
console.log(audrey);


//new prsonne 

/* let koffi = new Personne();

console.log(koffi);

let andrey = new Personne();

console.log(andrey);
 */

class animals {
    constructor(n){
        this.nom = n;
    }

    
}

let panthère = new animals("panthère");
console.log(panthère)
let chat = new animals("chat");
console.log(chat);
let chien = new animals("blacos");
chien.isLiving = false;
console.log(chien);
