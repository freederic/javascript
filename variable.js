let age= 52;
let anneeDeNaissance= 1968;
let somme= age+ anneeDeNaissance
console.log(somme)
let prenom= 'fredéric';
let nom= 'champeau';
let prenomEtNom=prenom+" "+nom;
console.log(prenomEtNom)

var prenomDeLaPersonne=prompt('Quel est votre prenom ?');
switch (prenomDeLaPersonne) {
        case 'Sarah':
            alert('Sarah Connor ?');
            break;
        
        case 'Siri':
            alert('Je n ai pas compris votre question ?');
            break;
       
        default:
            alert('Oh C est un joli prénom');
            break;
}
