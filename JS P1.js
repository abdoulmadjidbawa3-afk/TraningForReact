
const btn1 = document.getElementById("btn1");
const nom = document.getElementById("nom");
    btn1.addEventListener("click", function(){
        nom.textContent = "React Dev";

    });

const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function(){
        nom.style.color = "red";
    });

const texte = document.getElementById("texte");
const btn3 = document.getElementById("btn3");

    btn3.addEventListener("click", function(){
        if (texte.style.display === "none"){
            texte.style.display = "block";
        }
            else{
                texte.style.display = "none";
            }
    });
        
    