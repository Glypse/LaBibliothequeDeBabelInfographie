const fs = require('fs');

function railFenceCipherEncrypt(message, rails) {
    const fence = [];
    for (let i = 0; i < rails; i++) {
        fence.push([]);
    }

    let row = 0;
    let direction = 1;

    for (let i = 0; i < message.length; i++) {
        fence[row].push(message[i]);
        
        row += direction;

        if (row === 0 || row === rails - 1) {
            direction *= -1;
        }
    }
    const encryptedMessage = fence.map(rail => rail.join('')).join('');
    return encryptedMessage;
}

const inputString = fs.readFileSync('./inputString.txt', 'utf8');
const rails = 3;

const encryptedMessage = railFenceCipherEncrypt(inputString, rails);
fs.writeFileSync('outputString.txt', encryptedMessage, 'utf8');