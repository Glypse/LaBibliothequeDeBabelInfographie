const fs = require('fs');

function stringToHexWithSeparator(inputString, separator) {
    let hexString = '';
    for (let i = 0; i < inputString.length; i++) {
        const hexValue = inputString.charCodeAt(i).toString(16).toUpperCase();
        hexString += hexValue;
        if (i !== inputString.length - 1) {
            hexString += separator;
        }
    }
    return hexString;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const separator = ' ';

const result = stringToHexWithSeparator(inputString, separator);
fs.writeFileSync('outputString.txt', result, 'utf8');