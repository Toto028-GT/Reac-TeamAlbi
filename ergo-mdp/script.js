let isPasswordVisible = false;
        
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

let successfulValidations = 0;

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
            messageElement.textContent = "Enfin ! Vous pouvez valider avec OK";
            messageElement.style.color = "green";
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
    } else {
        messageElement.textContent = "Les mots de passe ne correspondent pas.";
        messageElement.style.color = "red";
    }
}