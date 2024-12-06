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
  
  


// Variables avec des valeurs initiales
let verifier = 0; // Exemple de valeur initiale
let verifier2 = 0;
let popupState = 0; // Gère la séquence des pop-ups
let isPasswordVisible = false;
let successfulValidations = 0;

// Fonction pour gérer la validation
function verifierFunction(event) {
    event.preventDefault();
    if (verifier === 0) {
        showPopup("Mot de passe invalide. Cliquez sur \"Vérifier\" pour corriger.");
    } else if (verifier === 1 && verifier2 === 0) {
        // Début de la séquence des pop-ups
        popupState = 1;
        showPopup("Êtes-vous sûr de vouloir vous inscrire ?", true, false, false);
    }
     else if(verifier === 2) {
        popupState = 5;
        showPopup("Êtes-vous un robot ?", true, false, true);
    }
    else{
        showPopup("Formulaire envoyé avec succès !");
    }
}

// Fonction pour passer "verifier" à 2
function setVerifierTo2() {
    verifier = 2;
    console.log("Verifier est maintenant à 2.");
    // showPopup("Le statut de Vérification est mis à jour : verifier = 2");
}

// Afficher la pop-up
function showPopup(message, showYesNo = false, showOk = false, showYesMaybeNo = false, showHein = false, showSuivant = false) {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupMessage = document.getElementById("popupMessage");
    const popupYes = document.getElementById("popupYes");
    const popupNo = document.getElementById("popupNo");
    const popupOk = document.getElementById("popupOk");
    const popupMaybe = document.getElementById("popupMaybe");
    const popupHein = document.getElementById("popupHein");
    const popupSuivant = document.getElementById("popupSuivant");

    // Met à jour le message
    popupMessage.innerText = message;

    // Réinitialise l'affichage de tous les boutons
    popupYes.style.display = "none";
    popupNo.style.display = "none";
    popupOk.style.display = "none";
    popupMaybe.style.display = "none";
    popupHein.style.display = "none";
    popupSuivant.style.display = "none";

    // Affiche les boutons demandés
    if (showYesNo) {
        popupYes.style.display = "inline-block";
        popupNo.style.display = "inline-block";
    }
    if (showYesMaybeNo) {
        popupYes.style.display = "inline-block";
        popupNo.style.display = "inline-block";
        popupMaybe.style.display = "inline-block";
    }
    if (showOk) {
        popupOk.style.display = "inline-block";
    }
    if (showHein) {
        popupHein.style.display = "inline-block";
    }
    if (showSuivant) {
        popupSuivant.style.display = "inline-block";
    }

    // Affiche la pop-up et l'overlay
    popup.style.display = "block";
    overlay.style.display = "block";
}


// Fermer la pop-up
function hidePopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    popup.style.display = "none";
    overlay.style.display = "none";
}

// Gestion des réponses Oui et Non
function handleYes() {
    if (popupState === 1) {
        popupState = 2;
        showPopup("Êtes-vous vraiment sûr ?", true);
    } else if (popupState === 2) {
        popupState = 3;
        showPopup("Voulez-vous tout recommencer ?", true);
    } else if (popupState === 3) {
        // Action de tout recommencer
        location.reload();
    } else if (popupState === 5){
        // Action de tout recommencer
        window.location.href = "https://youtu.be/xvFZjo5PgG0?si=36zwHB8szJGB1umh";
    }
}

function handleMaybe() {
    popupState = 5;
    showPopup("Êtes-vous un robot ?", true, false, true); // Réaffiche la même pop-up
}

function handleNo() {
    if (popupState === 3) {
        popupState = 4;
        showPopup("Veuillez confirmer votre mot de passe.", false, true);
    } else if(popupState === 5){
        popupState = 6;
        showPopup("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", false, false, false, true);
    }
    else {
        hidePopup();
    }
}

// Gestion du bouton OK
function handleOk() {
    if (popupState === 4) {
        verifier2 = 1; // Met à jour verifier2
        updateBoutonVerif2(); // Met à jour l'affichage
        hidePopup();

        // Sélection des boutons
        const form = document.getElementById("myForm");
        const submitButton = form.querySelector('button[type="submit"]');
        const resetButton = form.querySelector('button[type="reset"]');

        // Échanger leurs positions dans le DOM
        const parent = submitButton.parentElement;
        parent.insertBefore(resetButton, submitButton);

        // Modifier les styles des boutons
        resetButton.style.backgroundColor = "lightgreen";
        submitButton.style.backgroundColor = "red";
        submitButton.style.color = "white"; // Pour rendre le texte lisible
    }
}

function handleHein() {
    popupState = 8;
    showPopup("Nous ne pouvons stocker toutes les données que vous nous envoyées. Nous ne pourrons enregistrer vos coordonnées, mais voici le lien vers les informations que souhaitez.", false, false, false, false, true); // Réaffiche la même pop-up
}

function handleSuivant() {
    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=36zwHB8szJGB1umh";
}

function updateBoutonVerif2() {
    const boutonVerif2 = document.getElementById("boutonVerif2");
    if (verifier2 === 1) {
        boutonVerif2.style.display = "block"; // Visible
    } else {
        boutonVerif2.style.display = "none"; // Caché
    }
}

// Attacher l'événement de validation au formulaire
const form = document.getElementById("myForm");
form.addEventListener("submit", verifierFunction);

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    isPasswordVisible = !isPasswordVisible;
    passwordField.type = isPasswordVisible ? "text" : "password";
}

let conditions = {
    lowercase: { count: 5, consecutive: false },
    uppercase: { count: 6, unique: true },
    digits: { count: 5, unique: true }
};

function validatePassword() {
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("password-message");

    // Expressions régulières
    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const digitsRegex = /[0-9]/g;

    // Trouver les correspondances
    const lowercaseMatches = password.match(lowercaseRegex) || [];
    const uppercaseMatches = password.match(uppercaseRegex) || [];
    const digitsMatches = password.match(digitsRegex) || [];

    const hasEnoughLowercase = lowercaseMatches.length >= conditions.lowercase.count;
    const hasUniqueLowercase = new Set(lowercaseMatches).size >= conditions.lowercase.count;

    const hasEnoughUppercase = uppercaseMatches.length >= conditions.uppercase.count;
    const hasUniqueUppercase = conditions.uppercase.unique ? new Set(uppercaseMatches).size >= conditions.uppercase.count : true;

    const hasEnoughDigits = digitsMatches.length >= conditions.digits.count;
    const hasUniqueDigits = conditions.digits.unique ? new Set(digitsMatches).size >= conditions.digits.count : true;
	
	console.log(conditions)
    if (hasEnoughLowercase && hasUniqueLowercase && hasEnoughUppercase && hasUniqueUppercase && hasEnoughDigits && hasUniqueDigits) {
        successfulValidations++;
        if (successfulValidations === 1) {
            messageElement.textContent = "Veuillez bien lire les critères de mot de passe !";
            messageElement.style.color = "red";
            conditions = {
                lowercase: { count: getRandomInt(3, 13), consecutive: false },
                uppercase: { count: getRandomInt(3, 13), unique: true },
                digits: { count: getRandomInt(3, 10), unique: true }
            };
        } else if (successfulValidations === 2) {
            messageElement.textContent = "Ça devient long, veuillez vraiment bien lire les conditions !";
            messageElement.style.color = "red";
            conditions = {
                lowercase: { count: getRandomInt(5, 13), consecutive: false },
                uppercase: { count: getRandomInt(5, 13), unique: true },
                digits: { count: getRandomInt(5, 10), unique: true }
            };
        } else {
            messageElement.textContent = "Enfin ! Vous pouvez valider avec Valider";
            messageElement.style.color = "green";
            verifier = 1;
        }
    } else {
        messageElement.textContent = "Mot de passe invalide. Vérifiez les critères :\n" +
            conditions.lowercase.count + " lettres minuscules différentes, " +
            conditions.uppercase.count + " lettres majuscules différentes, et " +
            conditions.digits.count + " chiffres différents";
        messageElement.style.color = "red";
    }
}
function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function validatePasswordConfirmation() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("conf_password").value;
    const messageElement = document.getElementById("confirmation-message");

    if (password === confirmPassword) {
        messageElement.textContent = "Les mots de passe correspondent.";
        messageElement.style.color = "green";
        verifier = 2;
    } else {
        messageElement.textContent = "Les mots de passe ne correspondent pas.";
        messageElement.style.color = "red";
    }
}

