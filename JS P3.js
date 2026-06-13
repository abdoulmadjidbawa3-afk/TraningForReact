const input = document.getElementById("input");
const btn = document.getElementById("btn");
const liste = document.getElementById("liste");
input.focus();


btn.addEventListener("click", function(){

    const taches = input.value.trim();

    if (taches !== "") {
        const li = document.createElement("li");
        li.textContent = taches;
        liste.appendChild(li);

        input.value = "";
    }
    
});