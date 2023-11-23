// Import the 'fs' module for file system operations
const fs = require('fs');
// Define the file path and content to be written
const filePath = 'welcome.txt';
const fileContent = 'Hello Node';
// Write content to a file named 'welcome.txt'
fs.writeFile(filePath, fileContent, (err) => {
  // Check for errors during the write operation
  if (err) throw err;
  // Log a message indicating successful file save
  console.log(`File '${filePath}' saved!`);
});
// Read content from 'welcome.txt' and log it to the console
fs.readFile(filePath, 'utf8', (err, data) => {
  // Check for errors during the read operation
  if (err) throw err;

  // Log the content read from the file to the console
  console.log(data);
});
