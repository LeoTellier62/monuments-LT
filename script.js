//Pour remplir les listes en fonction de la data
const btnList = document.getElementById('list-btn');

//Pour savoir quel monument est actif 
let monuActif = null;

// Selectionne la data, lit les données, créer la liste avec boutons sur le côté, et les cercle.
document.querySelectorAll('#data li').forEach(item => {
    const lat = parseFloat(item.getAttribute('data-lat'));
    const lng = parseFloat(item.getAttribute('data-lng'));
    const photo = item.getAttribute('data-photo');
    const nom = item.getAttribute('data-nom');
    const ville = item.getAttribute('data-ville');
    const pays = item.getAttribute('data-pays');
    const photodesc = item.getAttribute('data-photo-desc');
    const desc = item.getAttribute('data-desc');
  
    // Création de la liste des boutons + photos
    const listItems = document.createElement('li');
    listItems.innerHTML = ` <div class="nom-monu"> <span>${nom}</span> </div>
                            <div class="photo-monu"> <img src="${photo}" alt="${nom}" /> </div>`;
    btnList.appendChild(listItems);

    //Pour changer contenu de la description en cliquant que sur le bouton ou l'image
    listItems.addEventListener('click', (event) => {
        const selectMonu = listItems.querySelector('.photo-monu');
        const nomMonu = listItems.querySelector('.nom-monu');

        if (event.target.closest('.nom-monu') || event.target.closest('.photo-monu')) 
            {
                if (monuActif === selectMonu) 
                {
                    monuActif = null;

                    // Reinit css
                    document.querySelectorAll('.photo-monu').forEach(photoDiv => {
                        photoDiv.classList.remove('filtre', 'active-monu');
                    });
                
                    document.querySelectorAll('.nom-monu').forEach(nomDiv => {
                        nomDiv.classList.remove('active-monu');
                    });

                    document.getElementById('explications').innerHTML = "";
                }

            else 
            {
                monuActif = selectMonu; 

                // Ajoute le filtre gris/couleur shadow à toutes les images et les réinitialise
                document.querySelectorAll('.photo-monu').forEach(photoDiv => {
                    photoDiv.classList.add('filtre');
                    photoDiv.classList.remove('active-monu');
                });

                document.querySelectorAll('.nom-monu').forEach(nomDiv => {
                    nomDiv.classList.remove('active-monu');
                });

                // Applique les styles actifs
                selectMonu.classList.remove('filtre');
                selectMonu.classList.add('active-monu');
                nomMonu.classList.add('active-monu');

                selectMonu.classList.remove('filtre');
                document.getElementById('explications').innerHTML = 
                    `
                    <div class="photo-desc"> <img src="${photodesc}" alt="${nom}" /> </div>
                    <div class="text-desc">
                        <p class="titre-expli">${nom}</p> 
                        <p class="lieu-expli">${ville}, <span>${pays}</span></p>
                        <p class="desc-expli">${desc}</p>
                    </div>`;
        }
    }
    });
});