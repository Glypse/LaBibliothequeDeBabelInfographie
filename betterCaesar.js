const fs = require('fs');

function caesarCipher(inputString, key) {
    let substitutedCharacters = [];

    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        let substitutedCharCode = charCode + key;
        substitutedCharCode = (substitutedCharCode - 0) % (0x10FFFF - 0) + 0;
        substitutedCharacters.push(String.fromCodePoint(substitutedCharCode));
    }
    let substitutedString = substitutedCharacters.join("");
    return substitutedString;
}
let inputString = fs.readFileSync('./inputString.txt', 'utf8');
let key = 5;

let cipheredString = caesarCipher(inputString, key);
fs.writeFileSync('outputString.txt', cipheredString, 'utf8');