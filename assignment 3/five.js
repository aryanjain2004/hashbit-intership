function correctFn(sentence, wrongWord, correctWord) {
  
    return sentence.replace(wrongWord, correctWord);
}


let originalSentence1 = "I love my cat and my dog.";
let correctedSentence1 = correctFn(originalSentence1, "cat", "fish");
console.log(`Original: "${originalSentence1}"`);
console.log(`Corrected: "${correctedSentence1}"`);
console.log("\n" + "=".repeat(30) + "\n");

let originalSentence2 = "The quick brown fox, quick as a flash, jumps over the lazy dog.";
let correctedSentence2 = correctFn(originalSentence2, "quick", "fast");
console.log(`Original: "${originalSentence2}"`);
console.log(`Corrected: "${correctedSentence2}"`); 

console.log("\n" + "=".repeat(30) + "\n");


let originalSentence3 = "Hello world!";
let correctedSentence3 = correctFn(originalSentence3, "moon", "sun");
console.log(`Original: "${originalSentence3}"`);
console.log(`Corrected: "${correctedSentence3}"`); 

console.log("\n" + "=".repeat(30) + "\n");


let originalSentence4 = "It is A good day.";
let correctedSentence4 = correctFn(originalSentence4, "A", "a");
console.log(`Original: "${originalSentence4}"`);
console.log(`Corrected: "${correctedSentence4}"`); 
