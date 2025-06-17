const str = 'I love my India';


const wordsArray = str.split(' ');


wordsArray.reverse();


const outputStr = wordsArray.join(' ');


console.log("Original string: " + str);

// Log the expected output to the console
console.log("Expected output: " + outputStr);