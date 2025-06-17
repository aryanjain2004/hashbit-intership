
const inputString = "The quick brown fox jumps over the lazy dog. This is a test string."; 


let vowelCount = 0;
let consonantCount = 0;


const vowels = new Set(['A', 'E', 'I', 'O', 'U']);


const processedString = inputString.toUpperCase();

// Iterate through each character of the processed string
for (let i = 0; i < processedString.length; i++) {
    const char = processedString[i];

   
    if (char >= 'A' && char <= 'Z') {
        // If it's a letter, check if it's a vowel
        if (vowels.has(char)) {
            vowelCount++; 
        } else {
            consonantCount++; 
        }
    }
    
}


console.log("Input String: '" + inputString + "'");
console.log("String Length: " + inputString.length + " characters");


console.log("Number of Vowels: " + vowelCount);
console.log("Number of Consonants: " + consonantCount);