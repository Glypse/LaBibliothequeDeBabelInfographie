const fs = require('fs');

function addRandomCharacter(inputString) {
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        result += inputString[i];

        const randomChar = String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32);
        
        result += randomChar;
    }
    fs.writeFileSync('outputString.txt', result, 'utf8');
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
addRandomCharacter(inputString);