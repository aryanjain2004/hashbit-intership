function calculate(num1, num2, operation) {
  let result; // Variable to store the calculation result

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break; // Exit the switch statement after a match
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      // Check for division by zero to prevent errors
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      result = num1 / num2;
      break;
    default:
      // Handle cases where an unknown operation is provided
      return "Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
  }

  return result; // Return the calculated result
}

// --- Examples of how to use the function: ---

console.log("Addition (5 + 3):", calculate(5, 3, 'add')); // Expected output: 8
console.log("Subtraction (10 - 4):", calculate(10, 4, 'subtract')); // Expected output: 6
console.log("Multiplication (7 * 2):", calculate(7, 2, 'multiply')); // Expected output: 14
console.log("Division (15 / 3):", calculate(15, 3, 'divide')); // Expected output: 5
console.log("Division by zero (8 / 0):", calculate(8, 0, 'divide')); // Expected output: Error message
console.log("Invalid operation (6, 2, 'power'):", calculate(6, 2, 'power')); // Expected output: Error message
console.log("Decimal division (10 / 4):", calculate(10, 4, 'divide')); // Expected output: 2.5
