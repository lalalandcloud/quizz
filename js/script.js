
var questions = [
    {
        que: "Comment s’appelle la femelle du lièvre ?\n(a) la lapine\n\(b) la hase\n(c) la levrette",
        rep: "b"
    },
    {
        que: "Quelle famille de primates peut-on rencontrer en liberté au Japon ?\n(a) des macaques\n\(b) de tamarins\n(c) des douroucoulis",
        rep: "a"
    },
    {
        que: "Quel animal possède généralement de 4 à 6 cornes ?\n(a) le bélier mourerous\n\(b)le bouquetin du Népal\n(c) le mouton de Jacob",
        rep: "c"
    },
]
var score = 0;

for(var i=0; i < questions.length; i++){
    var reponse = window.prompt(questions[i].que);
    if(reponse == questions[i].rep){
        score ++;
        alert("Correct!");
    }   else{
        alert("FAUX!");
    }
}
alert("Tu as" + score + "/" + questions.length);
