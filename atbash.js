const fs = require('fs');

function atbashCipher(inputString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const reverseAlphabet = alphabet.split("").reverse().join("");
    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            result += reverseAlphabet[index];
        } else {
            result += char;
        }
    }

    return result;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const encryptedString = atbashCipher(inputString);
fs.writeFileSync('outputString.txt', encryptedString, 'utf8');