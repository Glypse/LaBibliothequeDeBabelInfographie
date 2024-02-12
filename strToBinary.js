function convertToBinaryUsingCharacterCodes(input) { 
    let binaryResult = ''; 
      
    for (let i = 0; i < input.length; i++) { 
        const charCode = input.charCodeAt(i); 
        let binaryValue = ''; 
          
        for (let j = 7; j >= 0; j--) { 
            binaryValue += (charCode >> j) & 1; 
        } 
          
        binaryResult += binaryValue + ' '; 
    } 
      
    return binaryResult.trim(); 
} 
  
const inputString = "Les impies affirment que le non-sens est la règle dans la Bibliothèque et que les passages raisonnables, ou seulement de la plus humble cohérence, constituent une exception quasi miraculeuse. Ils parlent, je le sais, de « cette fiévreuse Bibliothèque dont les hasardeux volumes courent le risque incessant de se muer en d'autres et qui affirment, nient et confondent tout comme une divinité délirante ». Ces paroles, qui non seulement dénoncent le désordre mais encore l'illustrent, prouvent notoirement un goût détestable et une ignorance sans remède. En effet, la Bibliothèque comporte toutes les structures verbales, toutes les variations que permettent les vingt-cinq symboles orthographiques, mais point un seul non-sens absolu. Rien ne sert d'observer que les meilleurs volumes parmi les nombreux hexagones que j'administre ont pour titre Tonnerre coiffé, La Crampe de plâtre, et Axaxaxas mlö. Ces propositions, incohérentes à première vue, sont indubitablement susceptibles d'une justification cryptographique ou allégorique ; pareille justification est verbale, et, ex hypothesi, figure d'avance dans la Bibliothèque.";
const binaryRepresentation =  convertToBinaryUsingCharacterCodes(inputString); 
console.log(binaryRepresentation);