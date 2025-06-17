// Define an array of Indian states
const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
];

// Define a set of vowels for efficient lookup (case-insensitive)
const vowels = new Set(['A', 'E', 'I', 'O', 'U']);
const filteredStates = indianStates.filter(state => {
    // Get the first character of the state name
    const firstChar = state[0];

    const firstCharUpper = firstChar.toUpperCase();
    
    return !vowels.has(firstCharUpper);
});

// Log the original list to the console
console.log("Original list of Indian states:");
indianStates.forEach(state => {
    console.log(`- ${state}`);
});

console.log("\n" + "=".repeat(30) + "\n");

// Log the filtered list to the console
console.log("States after removing those starting with vowels:");
filteredStates.forEach(state => {
    console.log(`- ${state}`);
});