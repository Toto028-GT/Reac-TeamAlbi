function getClavier() {
  const keyboard = document.querySelector(".keyboard");
  if (keyboard.style.display === "none" || keyboard.style.display === "") {
    keyboard.style.display = "grid"; // Afficher le clavier
    addEventListener("keydown", block);
  } else {
    keyboard.style.display = "none"; // Cacher le clavier
    removeEventListener("keydown", block);
  }
}

function block(evt) {
  evt.preventDefault();
}

function ajouterCaractere(char) {
  const champActif = document.querySelector("#email"); // Sélectionne le champ email par exemple
  if (champActif) {
    champActif.value += char;
  }
}

// Fonction pour supprimer un caractère dans le champ actif
function supprimerCaractere() {
  const champActif = document.querySelector("#email"); // Sélectionne le champ email par exemple
  if (champActif && champActif.value.length > 0) {
    champActif.value = champActif.value.slice(0, -1);
  }
}

function getQwerty(){
  const qwertyLetters = [
    'Q', 'W', '¯\_(ツ)_/','E', 'R', 'T', 'Y', 'U','¯\_(ツ)_/', 'I', 'O', 'P',
    'A', 'S', 'D','¯\_(ツ)_/', 'F', 'G', 'H','¯\_(ツ)_/', 'J', 'K', 'L',
    'Z','¯\_(ツ)_/', 'X', 'C', 'V', 'B', 'N', 'M',
    '¯\_(ツ)_/'
  ];
  const container = document.getElementById('qwerty-container');
  if (container.innerHTML.trim() !== '') {

    container.innerHTML = '';
  } else {
      qwertyLetters.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.textContent = letter;  // Ajouter la lettre au texte de l'élément
        container.appendChild(letterElement);  // Ajouter l'élément à la div
    });
  }
}

function getTranslate() {
  const cyrillicMap = {
    'Й': 'Q', 'Ц': 'W', 'У': '¯\\_(ツ)_/', 'К': 'E', 'Е': 'R', 'Н': 'T', 'Г': 'Y', 'Ш': 'U',
    'Щ': '¯\\_(ツ)_/', 'З': 'I', 'Х': 'O', 'Ъ': 'P', 'Ф': 'A', 'Ы': 'S', 'В': 'D', 'А': '¯\\_(ツ)_/',
    'П': 'F', 'Р': 'G', 'О': 'H', 'Л': '¯\\_(ツ)_/', 'Д': 'J', 'Ж': 'K', 'Э': 'L', 'Я': 'Z',
    'Ч': '¯\\_(ツ)_/', 'С': 'X', 'М': 'C', 'И': 'V', 'Т': 'B', 'Ь': 'N', 'Б': 'M', 'Ю': '¯\\_(ツ)_/', 
  };


  // Récupérer le texte de l'élément avec l'id #email
  const txt = document.querySelector("#email").value;
  
  // Initialiser une chaîne vide pour la traduction
  let txttrans = "";

  // Boucle à travers chaque caractère du texte
  for (let i = 0; i < txt.length; i++) {
    const char = txt[i];  // Récupérer le caractère à la position i
    if (cyrillicMap[char]) {
      txttrans += cyrillicMap[char];  // Ajouter la valeur correspondante du mappage cyrillique
    } else {
      txttrans += char;  // Si pas de correspondance, ajouter le caractère d'origine
    }
  }
  return txttrans;
}

// Attacher des événements aux boutons du clavier virtuel
document.querySelectorAll(".key").forEach((keyButton) => {
  keyButton.addEventListener("click", () => {
    const keyValue = keyButton.textContent.trim();

    if (keyValue === "←") {
      supprimerCaractere(); // Supprime un caractère
    } else if (keyValue === "Enter") {
      const keyboard = document.querySelector(".keyboard");
      keyboard.style.display = "none";
      removeEventListener("keydown", block);
      const mail = getTranslate();
      alert('votre mail : '+mail);
    } else if (keyValue == "@") {
      if(document.querySelector("#email").value.includes(keyValue)){
        supprimerCaractere();
      }else{
        ajouterCaractere(keyValue);
      }
      
      getQwerty();
      
    } else {
      ajouterCaractere(keyValue); // Ajoute un caractère
    }
  });
});

