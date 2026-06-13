const citations = [
    "<<La discipline bat la motivation.>>",
    "<<Chaque jour compte.>>",
    "<<Le succès est une habitude.>>",
];


const btn = document.getElementById("btn");
const contenu = document.getElementById("contenu");


let compteur = 0 ;

btn.addEventListener("click", function genererCitation(){
    compteur++ ;

    if (compteur === 1){
        contenu.textContent = citations[0];
    }

        else if(compteur === 2){
            contenu.textContent = citations[1];
    }

        else if(compteur === 3){
            contenu.textContent = citations[2];
    }

        else{
            contenu.textContent = "Plus de citation pour aujourd'hui.";
    }

});
