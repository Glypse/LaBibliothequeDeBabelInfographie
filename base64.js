const fs = require('fs');

function encodeToBase64(inputString) {
    return btoa(inputString);
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');

const encodedString = encodeToBase64(inputString);
fs.writeFileSync('outputString.txt', encodedString, 'utf8');