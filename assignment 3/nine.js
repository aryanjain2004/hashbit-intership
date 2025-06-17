function countWords(paragraph) {
  // Trim leading/trailing whitespace
  const trimmedParagraph = paragraph.trim();

  // If the paragraph is empty, return 0 words
  if (trimmedParagraph === "") {
    return 0;
  }

  // Split the paragraph by one or more whitespace characters
  const words = trimmedParagraph.split(/\s+/);

  // Return the number of words
  return words.length;
}

// Example usage:
const myParagraph1 = "This is a sample paragraph with several words.";
console.log(`Paragraph 1 word count: ${countWords(myParagraph1)}`); // Output: 7

const myParagraph2 = "   Another paragraph with leading and trailing spaces.   ";
console.log(`Paragraph 2 word count: ${countWords(myParagraph2)}`); // Output: 7

const myParagraph3 = "";
console.log(`Paragraph 3 word count: ${countWords(myParagraph3)}`); // Output: 0

const myParagraph4 = "OneWord";
console.log(`Paragraph 4 word count: ${countWords(myParagraph4)}`); // Output: 1

const myParagraph5 = "  Words   with   multiple    spaces  between them.";
console.log(`Paragraph 5 word count: ${countWords(myParagraph5)}`); // Output: 7