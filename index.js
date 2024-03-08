const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to LinguaLabs! Our online language learning platform offers a wide range of courses and resources to help you learn a new language conveniently and affordably.');
});

app.get('/courses', (req, res) => {
  res.send('Choose from a wide range of interactive language courses designed to help you learn a new language quickly and effectively.');
});

app.get('/exercises', (req, res) => {
  res.send('Practice your language skills with our collection of exercises, including listening, speaking, reading, and writing exercises.');
});

app.get('/exchange', (req, res) => {
  res.send('Connect with other language learners and practice your skills through our language exchange programs.');
});

app.get('/register', (req, res) => {
  res.send('Ready to learn a new language? Register for our platform today and start your language learning journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('LinguaLabs server is running on port 3000.');
});