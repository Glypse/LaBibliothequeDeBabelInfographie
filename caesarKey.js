const fs = require('fs');

function caesarCipherEncrypt(inputString, shift) {
    const charArray = inputString.split('');

    const encryptedArray = charArray.map(char => {
        let charCode = char.charCodeAt(0);
        charCode = (charCode - 32 + shift) % 95 + 32;
        return String.fromCharCode(charCode);
    });
    
    const encryptedString = encryptedArray.join('');
    return encryptedString;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const shift = 242;

const encryptedString = caesarCipherEncrypt(inputString, shift);
fs.writeFileSync('outputString.txt', encryptedString, 'utf8');