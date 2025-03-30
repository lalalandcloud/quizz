// Demander le nom du joueur
let nomJoueur = prompt("Quel est ton nom, joueur ?");

// Afficher un message d'accueil personnalisé dans la console
alert("Bienvenue, " + nomJoueur + " ! Prêt à commencer le jeu ?");

// Créer un objet joueur avec le nom
let joueur = {
  nom: nomJoueur,
  score: 0, // exemple de score initial
  niveau: 1 // exemple de niveau initial
};

// Afficher les informations du joueur dans la console
console.log("Nom du joueur : " + joueur.nom);
console.log("Score : " + joueur.score);
console.log("Niveau : " + joueur.niveau);



var questions = [
    {
        que: "Comment s’appelle la femelle du lièvre ?\n(a) la lapine\n\(b) la hase\n(c) la levrette",
        rep: "b",
        repComplete: "la hase",
    },
    {
        que: "Quelle famille de primates peut-on rencontrer en liberté au Japon ?\n(a) des macaques\n\(b) de tamarins\n(c) des douroucoulis",
        rep: "a",
        repComplete: "des macaques",
    },
    {
        que: "Quel animal possède généralement de 4 à 6 cornes ?\n(a) le bélier mourerous\n\(b)le bouquetin du Népal\n(c) le mouton de Jacob",
        rep: "c",
        repComplete:"le mouton de Jacob",

    },
    {
        que: "Quel est le nom de la brebis connue pour être le premier mammifère cloné à partir d'une cellule adulte ?\n(a) Polly\n\(b) Molly\n(c) Dolly",
        rep: "c",
        repComplete:"Dolly",

    },
    {
        que: "Dans quel continent ne trouve-t-on aucune espèce d'ours à l'état sauvage ? ?\n(a) Afrique\n\(b)Asie\n(c) Amérique du Sud",
        rep: "a",
        repComplete:"l'Afrique",

    },
    {
        que: "Sous son épaisse fourrure blanche, de quelle couleur est la peau de l’ours polaire ? ?\n(a) Rose\n\(b) Noire\n(c) Blanche",
        rep: "b",
        repComplete: "noire",

    },
    {
        que: "Comment les fennecs s’adaptent-ils aux températures extrêmes du désert?\n(a) Ils se roulent dans le sable\n\(b) Leurs grandes oreilles\n(c) Ils se nourrissent de cactus pour s'hydrater",
        rep: "b",
        repComplete:"leurs grandes oreilles",

    },
    {
        que: "Quel est le signe distinctif des lynx?\n(a) Ils n'ont pas de queues\n\(b) Des rayures\n(c) Des oreilles touffues",
        rep: "c",
        repComplete:"des oreilles touffues",

    },
    {
        que: "Quel animal est un très proche cousin de la marmotte?\n(a) Le chien de prairie\n\(b) Le ragondin\n(c) Le castor",
        rep: "a",
        repComplete:"le chien de prairie",

    },

,
]
var score = 0;

for(var i=0; i < questions.length; i++){
    var reponse = window.prompt(questions[i].que);
    if(reponse == questions[i].rep){
        score ++;
        alert("Correct!");
    }   else{
        alert("FAUX!" +" la réponse correcte était " + questions[i].repComplete);
    }
}

alert("Tu as" + score + "/" + questions.length + "bonnes réponses"  +  nomJoueur);
