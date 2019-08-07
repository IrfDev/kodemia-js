/**
 * Escribir una función que acepte como argumento un string y capitalizar
 * cada palabra dentro del string
 */

function findLongestWord() {
    let stringSplit = findLongestWord.split(' ')
    let longestWord = 0;
    for (var index = 0; index < stringSplit.length; index++) {

        if (stringSplit[index].length > longestWord) {
            longestWord = stringSplit[index].length
        }
        var theLongestWord = stringSplit[longestWord]
        return theLongestWord

    }
}
findLongestWord('hola como estan murcielago')



/**
 * Escribir una función que acepte como argumento un string y capitalizar
 * cada palabra dentro del string
 */

function capitalizeWords() {
    let sentence = 'hola como estan todos murcielagos'
    let stringSplit = sentence.split(' ')
    let wordsCapitilized = `${stringSplit.touppercase}`
    return wordsCapitilized
}

/*

*/