function repeatedSumOfDigits(number) {
  // Continue the loop as long as the number has more than one digit
  while (number >= 10) {
    let sum = 0;
    // Convert the number to a string to iterate through its digits
    const numStr = String(number);
    for (let i = 0; i < numStr.length; i++) {
     
      sum += parseInt(numStr[i], 10);
    }
    
    number = sum;
  }
  // Return the single-digit result
  return number;
}

// Examples:
console.log(`456 -> ${repeatedSumOfDigits(456)}`);    
console.log(`123 -> ${repeatedSumOfDigits(123)}`);    
console.log(`9876 -> ${repeatedSumOfDigits(9876)}`);  
console.log(`5 -> ${repeatedSumOfDigits(5)}`);        
console.log(`0 -> ${repeatedSumOfDigits(0)}`);        
console.log(`99 -> ${repeatedSumOfDigits(99)}`);      