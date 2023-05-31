// Fonction pour remplacer le css
function myfonction(toto){
  document.getElementById('stylepage').setAttribute('href',toto);
}

//Ajoute le titre créé comme premier enfant de l'élément body
let b = document.body;
let titre = document.createElement('h1');

titre.textContent = 'TEMPGRAM';

b.prepend(titre);
