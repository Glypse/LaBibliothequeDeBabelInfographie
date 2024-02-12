// Function to add a random character between each character of the input string
function addRandomCharacter(inputString) {
    // Initialize an empty string to store the result
    let result = "";

    // Loop through each character of the input string
    for (let i = 0; i < inputString.length; i++) {
        // Add the current character to the result string
        result += inputString[i];
        
        // Generate a random character (ASCII value between 32 and 126)
        const randomChar = String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32);
        
        // Add the random character to the result string
        result += randomChar;
    }

    // Log the result to the console
    console.log(result);
}

// Example usage:
const inputString = "Les impies affirment que le non-sens est la règle dans la Bibliothèque et que les passages raisonnables, ou seulement de la plus humble cohérence, constituent une exception quasi miraculeuse. Ils parlent, je le sais, de « cette fiévreuse Bibliothèque dont les hasardeux volumes courent le risque incessant de se muer en d'autres et qui affirment, nient et confondent tout comme une divinité délirante ». Ces paroles, qui non seulement dénoncent le désordre mais encore l'illustrent, prouvent notoirement un goût détestable et une ignorance sans remède. En effet, la Bibliothèque comporte toutes les structures verbales, toutes les variations que permettent les vingt-cinq symboles orthographiques, mais point un seul non-sens absolu. Rien ne sert d'observer que les meilleurs volumes parmi les nombreux hexagones que j'administre ont pour titre Tonnerre coiffé, La Crampe de plâtre, et Axaxaxas mlö. Ces propositions, incohérentes à première vue, sont indubitablement susceptibles d'une justification cryptographique ou allégorique ; pareille justification est verbale, et, ex hypothesi, figure d'avance dans la Bibliothèque.";
addRandomCharacter(inputString);
