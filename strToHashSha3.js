// Importing the sha3 library
const sha3 = require('js-sha3');

// Function to hash the input string with the provided key
function hashWithKey(input, key) {
    // Concatenate the input string with the key
    const concatenatedString = input + key;
    // Hash the concatenated string using SHA-3 (512 bits) algorithm
    const hashedString = sha3.sha3_512(concatenatedString);
    return hashedString;
}

// Sample input string
const inputString = "Les impies affirment que le non-sens est la règle dans la Bibliothèque et que les passages raisonnables, ou seulement de la plus humble cohérence, constituent une exception quasi miraculeuse. Ils parlent, je le sais, de « cette fiévreuse Bibliothèque dont les hasardeux volumes courent le risque incessant de se muer en d'autres et qui affirment, nient et confondent tout comme une divinité délirante ». Ces paroles, qui non seulement dénoncent le désordre mais encore l'illustrent, prouvent notoirement un goût détestable et une ignorance sans remède. En effet, la Bibliothèque comporte toutes les structures verbales, toutes les variations que permettent les vingt-cinq symboles orthographiques, mais point un seul non-sens absolu. Rien ne sert d'observer que les meilleurs volumes parmi les nombreux hexagones que j'administre ont pour titre Tonnerre coiffé, La Crampe de plâtre, et Axaxaxas mlö. Ces propositions, incohérentes à première vue, sont indubitablement susceptibles d'une justification cryptographique ou allégorique ; pareille justification est verbale, et, ex hypothesi, figure d'avance dans la Bibliothèque.";

// Get the key from the user (you can replace this with any method of obtaining user input)
const key = "waitwhat"; // Replace "YourSecretKey" with the user's actual key input

// Hash the input string using the provided key
const hashedResult = hashWithKey(inputString, key);

// Print the hashed result
console.log("Hashed Result:", hashedResult);