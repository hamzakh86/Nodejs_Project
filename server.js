// Import the 'http' module to create an HTTP server
const http = require('http');
// Create an HTTP server that handles incoming requests and sends a simple HTML response
const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 and content type of HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  // Send an HTML response with an h1 tag containing the message 'Hello Node!!!!'
  res.end('<h1>Hello Node!!!!</h1>\n');
});
// Define the port on which the server will listen for incoming requests
const PORT = 3000;
// Start the server and listen on the specified port
server.listen(PORT, () => {
  // Log a message to indicate that the server is listening and on which port
  console.log(`Server is listening on port ${PORT}`);
});
