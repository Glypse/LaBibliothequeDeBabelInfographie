const fs = require('fs');
const crypto = require('crypto');

function encryptString(inputString, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encryptedData = cipher.update(inputString, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');

    return encryptedData;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const key = 'symmetricKey';

const encryptedString = encryptString(inputString, key);
fs.writeFileSync('outputString.txt', encryptedString, 'utf8');