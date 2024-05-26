const fs = require('fs');

function convertToHTMLNumeric(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        const charCode = inputString.charCodeAt(i);
        result += '&#' + charCode + '; ';
    }
    return result;
}
const inputString = fs.readFileSync('./inputString.txt', 'utf8');

const htmlNumericCodes = convertToHTMLNumeric(inputString);
fs.writeFileSync('outputString.txt', htmlNumericCodes, 'utf8');