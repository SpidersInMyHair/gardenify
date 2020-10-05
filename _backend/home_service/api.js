const express = require('express');
const app = module.exports = express();

const SERVICE = '/home';

// Service Endpoints
// GET  /home/test    An endpoint used for testing connection to the backend.

app.get(`${SERVICE}/test`, (req,res) => {
  res.status(200).send('Okay');
});
