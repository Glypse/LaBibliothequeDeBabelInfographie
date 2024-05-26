const fs = require('fs');

function vigenereCipherEncrypt(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const extendedKey = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        const char = message[i].toUpperCase();
        if (alphabet.includes(char)) {
            const shift = alphabet.indexOf(extendedKey[i]);
            const encryptedCharIndex = (alphabet.indexOf(char) + shift) % alphabet.length;
            encryptedMessage += alphabet[encryptedCharIndex];
        } else {
            encryptedMessage += char;
        }
    }
    return encryptedMessage;
}
const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const key = "VIGENERE";
const encryptedMessage = vigenereCipherEncrypt(inputString, key);
fs.writeFileSync('outputString.txt', encryptedMessage, 'utf8');