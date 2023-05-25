// Has Unique Characters

// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

function hasUniqueChars(string) {
    for(let i = 0; i < string.length; i++) {
        for(let j = i + 1; j < string.length; j++) {
    if (string[i] === string[j]) {
        return false
        }
    }
} 
        return true
}
console.log(hasUniqueChars("Bob"))
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
console.log(hasUniqueChars("MOonday"))