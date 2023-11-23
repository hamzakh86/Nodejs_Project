// Import the 'nodemailer' module for sending emails
const nodemailer = require('nodemailer');
// Create a transporter with Gmail service and authentication
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'khaledhamza251785@gmail.com', // Replace with my Gmail email address
    pass: '1234567890', // Replace with my Gmail password
  },
});
// Define email options, including sender, recipient, subject, and text body
const mailOptions = {
  from: 'khaledhamza251785@gmail.com', // Sender's email address
  to: 'your-email@gmail.com', // Replace with the actual recipient's email address
  subject: 'Hello Node', // Email subject
  text: 'That was easy!', // Text body of the email
};
// Send the email and log the result
transporter.sendMail(mailOptions, (error, info) => {
  // Check for errors during the email sending operation
  if (error) {
    console.log(error); // Log the error details if present
  } else {
    console.log(`Email sent: ${info.response}`); // Log a success message with response details
  }
});
