// Import the 'generate-password' module for password generation
const generatePassword = require('generate-password');
// Define options for password generation, including length, character types, etc.
const passwordOptions = {
  length: 10,         // Set the length of the generated password
  numbers: true,      // Include numbers in the password
  uppercase: true,    // Include uppercase letters in the password
  lowercase: true,    // Include lowercase letters in the password
  symbols: true,      // Include symbols in the password
  strict: true,       // Ensure that at least one character from each chosen character set is included
};
// Generate a password based on the defined options
const password = generatePassword.generate(passwordOptions);
// Log the generated password to the console
console.log(password);
