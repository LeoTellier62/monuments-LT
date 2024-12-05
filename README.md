# Les monuments

Rendre dynamique une page web afin d'afficher des informations sur les monuments lorsque l'utilisateur clique sur un bouton.

![img_html](./images/brief_monuments.webp)


## Contexte du projet

Vous venez d'entrer dans une agence web dont l'une des missions consiste à créer un site mettant en valeur les monuments emblématiques de France.

Le client vous met à disposition un jeu de données basique pour commencer le développement, contenant les informations pour 5 monuments ainsi qu'une maquette à respecter.

Vous devez créer un site qui permettra, en un coup d'oeil, de voir les monuments disponibles et d'accéder à des informations sur ces derniers en un clic.
Les seuls informations nécessaires sont : la ville et le pays (dans ce cas, toujours la France) et une courte description du monument.

Le client souhaiterait également afficher une carte de France avec un marqueur qui marquera l'emplacement du monument.


## Modalités pédagogiques

***Activité individuelle en mode collaboratif.***

- Vous pouvez modifier l'`index.html`, le `style.css` et bien sûr le `script.js`.
- La couleur noire utilisée dans la maquette est déclarée en tant que custom property dans `style.css` (voir ressources)

### Etape 1 : Création de l'interface utilisateur
- Développez l'interface utilisateur en vous appuyant sur la maquette, avec une liste des monuments en images et une liste de boutons correspondants à chaque monument
- Créez une section vide sous les monuments qui accueillera les informations lorsque l'utilisateur cliquera sur l'un d'entre eux

### Etape 2 : Remplissage de la section informations
- Remplissez la section, pour l'instant vide, avec les informations d'un des monuments pour mettre en forme ces dernières en respectant la maquette

### Etape 3 : Logique de sélection des éléments
- Développez la logique en JS afin de sélectionner un monument en cliquant sur l'image ou sur le bouton associé et de faire apparaître les informations concernant ce monument uniquement
- Création de transitions ou keyframes pour que les informations n'apparaissent pas brutalement (un fondu avec le texte venant de gauche par exemple)

### Etape 4 : Carte avec marqueurs
- Sous les informations relatives à chaque monument, placez une carte de France sur laquelle vous allez indiquer l'emplacement du monument concerné avec un marqueur.

### Deadline
*4 jours*


## Modalités d'évaluation

- Correction entre pairs à l'aide d'une grille d'évaluation.


## Livrables

- Le lien vers votre dépôt `GitHub` avec un dernier commit lorsque tout fonctionne "finished"


## Critères de performance

- Ajoutez la grille d'évaluation ci-dessous dans le README de la personne que vous corrigez.
- Pensez à compléter le ***nom de la personne corrigée*** et le ***nom du correcteur*** dans l'entête du tableau.
- Indiquez le **nombre d'étoiles obtenues** (l'étoile d'une catégorie est obtenue si tous ses critères de performance sont validés).

| TELLIER Léo          |                                                 | DIOUF PAPA IBRA     |
| :---- | :----: | :---: |
| Critères de performance                |                               | Remarques du correcteur   |
| ***Interface utilisateur***            |                               |                           |
| - Respect de la maquette               | <ul><li>- [X] &nbsp;</li><ul> |                           |
| - Interface interactive                | <ul><li>- [X] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [X] ⭐</li><ul>     |                           |
| ***Fonctionnalités***                  |                               |                           |
| - Boutons et clic sur images fonctionnels | <ul><li>- [X] &nbsp;</li><ul> |                        |
| - Description correspondant au monument sélectionné | <ul><li>- [X] &nbsp;</li><ul> |              |
| - Transitions sur les informations     | <ul><li>- [X ] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [X] ⭐</li><ul>     |                           |
| ***Code***                             |                               |                           |
| - Organisation et lisibilité du code   | <ul><li>- [X] &nbsp;</li><ul> |                           |
| - Respect des bonnes pratiques HTML/CSS/JS | <ul><li>- [X] &nbsp;</li><ul> |                       |
| - Commentaires dans le code            | <ul><li>- [X] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [X] ⭐</li><ul>     |                           |
| ***Livrables***                        |                               |                           |
| - Projet livré dans les délais         | <ul><li>- [X] &nbsp;</li><ul> |                           |
|                                        | <ul><li>- [X] ⭐</li><ul>     |                           |

**Nombre d'étoiles obtenues** : ⭐⭐⭐⭐⭐


## Ressources

- [CSS - Custom Properties](https://developer.mozilla.org/fr/docs/Web/CSS/--*)
- [JS - Event Listeners](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- [JS - Changer le contenu d'une balise HTML](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#apprentissage_actif_manipulations_basiques_du_dom)

Pour les informations concernant les monuments, à vous d'effectuer vos recherches (google / wikipedia / chatgpt...).<br>
Les maquettes sont dans le dossier `models`.

## Auteurs

* [Rémy Cottrez](https://github.com/RemyCTRZ)
