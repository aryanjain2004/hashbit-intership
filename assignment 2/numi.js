function sumOfProductsOfDigits(n1, n2) {
    // Convert numbers to strings to access digits
    const s1 = String(n1);
    const s2 = String(n2);

    // Determine the maximum length
    const maxLength = Math.max(s1.length, s2.length);

    // Function to pad a string with leading zeros
    // This is a common utility in JS as zfill is not built-in for strings.
    const padStart = (str, targetLength, padString) => {
        padString = padString || '0';
        str = String(str);
        while (str.length < targetLength) {
            str = padString + str;
        }
        return str;
    };

    // Pad the shorter string with leading zeros to match the length
    // This ensures correct 'corresponding' digits, e.g., 6 becomes "06" for 34
    const paddedS1 = padStart(s1, maxLength, '0');
    const paddedS2 = padStart(s2, maxLength, '0');

    let totalSum = 0;

    // Iterate through the digits from left to right
    // The padding ensures that corresponding digits are at the same index
    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(paddedS1[i], 10);
        const digit2 = parseInt(paddedS2[i], 10);
        totalSum += (digit1 * digit2);
    }

    return totalSum;
}

// --- Examples of usage ---
console.log(`n1=6, n2=34 -> Sum of products: ${sumOfProductsOfDigits(6, 34)}`);
console.log(`n1=34, n2=6 -> Sum of products: ${sumOfProductsOfDigits(34, 6)}`);
console.log(`n1=123, n2=45 -> Sum of products: ${sumOfProductsOfDigits(123, 45)}`);
console.log(`n1=45, n2=123 -> Sum of products: ${sumOfProductsOfDigits(45, 123)}`);
console.log(`n1=123, n2=456 -> Sum of products: ${sumOfProductsOfDigits(123, 456)}`);
console.log(`n1=7, n2=8 -> Sum of products: ${sumOfProductsOfDigits(7, 8)}`);
console.log(`n1=0, n2=123 -> Sum of products: ${sumOfProductsOfDigits(0, 123)}`);