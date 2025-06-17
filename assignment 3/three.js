const inputString = 'INDIA';


const charArray = inputString.split('');


console.log("Initial character array:", charArray); 


charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I');


console.log("Modified character array:", charArray); 

const outputString = charArray.join('');


console.log("Original string: '" + inputString + "'");
console.log("Output string using array.splice: '" + outputString + "'"); 