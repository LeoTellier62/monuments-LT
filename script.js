//Pour remplir les listes en fonction de la data
const btnList = document.getElementById('list-btn');

// Selectionne la data, lit les données, créer la liste avec boutons sur le côté, et les cercle.
document.querySelectorAll('#data li').forEach(item => {
    const lat = parseFloat(item.getAttribute('data-lat'));
    const lng = parseFloat(item.getAttribute('data-lng'));
    const photo = item.getAttribute('data-photo');
    const nom = item.getAttribute('data-nom');
    const ville = item.getAttribute('data-ville');
    const pays = item.getAttribute('data-pays');
    const desc = item.getAttribute('data-desc');
  
    // Création de la liste des boutons + photos
    const listItems = document.createElement('li');
    listItems.innerHTML = ` <div class="nom-monu"> <span>${nom}</span> </div>
                            <div class="photo-monu"> <img src="${photo}" alt="${nom}" /> </div>`;
    btnList.appendChild(listItems);

    //Pour changer contenu de la description en cliquant que sur le bouton ou l'image
    listItems.addEventListener('click', (event) => {
        if (event.target.closest('.nom-monu') || event.target.closest('.photo-monu')) 
        {
            document.getElementById('explications').innerHTML = ` <h1>${ville}</h1> ${desc}`;

            // applique filtre gris
            document.querySelectorAll('.photo-monu').forEach(photoDiv => {
                photoDiv.classList.add('filtre');
            });

            // Supprime filtre gris
            listItems.querySelector('.photo-monu').classList.remove('filtre');
        }
    });
});