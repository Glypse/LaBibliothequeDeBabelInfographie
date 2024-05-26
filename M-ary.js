const fs = require('fs');

function encodeToM_ary(inputString, base) {
    let encodedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let codePoint = inputString.charCodeAt(i);
        let encodedCharacter = "";
        while (codePoint > 0) {
            encodedCharacter = (codePoint % base).toString() + encodedCharacter;
            codePoint = Math.floor(codePoint / base);
        }
        while (encodedCharacter.length < Math.ceil(Math.log2(base))) {
            encodedCharacter = "0" + encodedCharacter;
        }
        encodedString += encodedCharacter;
    }
    return encodedString;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const base = 8;

const encodedString = encodeToM_ary(inputString, base);
fs.writeFileSync('outputString.txt', encodedString, 'utf8');