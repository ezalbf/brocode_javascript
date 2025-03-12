const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length,includeLowerCase, includeUpperCase, includeSymbols, includeNumbers){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbersChars = "0123456789"
    const symbolsChars = "!@#$%^&*_+-=:<>,.?"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return(`password length must be at least 1`)
    }
    if(allowedChars.length === 0){
        return("at least one character set should be selected")
    }

    for(let i=0; i<length;i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];   //square brackets can be used for strings too!
    }

    return password;
}

const password = generatePassword(passwordLength,includeLowerCase, includeUpperCase, includeSymbols, includeNumbers)
console.log(`Generated password: ${password}`)
