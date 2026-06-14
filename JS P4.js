const container = document.getElementById("container");

const utilisateurs = [
    {
        Nom: "Abro",
        Niveau: "Débutant"
    },

    {
        Nom: "Alice",
        Niveau: "Intermédiare"
    },

    {
        Nom: "John",
        Niveau: "Avancé"
    }
];


for(let i = 0; i < utilisateurs.length; i++){

    //Je créer la card
    const card = document.createElement("div");
    card.className = "card";

    // Je l'ajoute du contenu

    const h2 = document.createElement("h2");
    h2.textContent = utilisateurs[i].Nom;

    const p = document.createElement("p");
    p.textContent = utilisateurs[i].Niveau;

    // Je les assemble

    card.appendChild(h2);
    card.appendChild(p);

    // Je les insert dans page

    container.appendChild(card);

};





