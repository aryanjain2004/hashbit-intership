function reverseString(inputString) {
  const charArray = [...inputString];

  
  charArray.reverse();

  const reversedStr = charArray.join('');

  return reversedStr;

  
}

// Example Usage:
const originalString1 = "Hello";
const reversedString1 = reverseString(originalString1);
console.log(`Original: "${originalString1}"`);
console.log(`Reversed: "${reversedString1}"`); // Output: olleH

const originalString2 = "JavaScript";
const reversedString2 = reverseString(originalString2);
console.log(`Original: "${originalString2}"`);
console.log(`Reversed: "${reversedString2}"`); // Output: tpircSavaJ

const originalString3 = "a";
const reversedString3 = reverseString(originalString3);
console.log(`Original: "${originalString3}"`);
console.log(`Reversed: "${reversedString3}"`); // Output: a

const originalString4 = "";
const reversedString4 = reverseString(originalString4);
console.log(`Original: "${originalString4}"`);
console.log(`Reversed: "${reversedString4}"`); // Output: (empty string)

const originalString5 = "Madam"; // Example with mixed case
const reversedString5 = reverseString(originalString5);
console.log(`Original: "${originalString5}"`);
console.log(`Reversed: "${reversedString5}"`); // Output: madaM
