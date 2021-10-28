const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  res.readFromFile(path.join(__dirname, '/db/diagnostics.json'))
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  res.readAndAppend(path.join(__dirname, '/public/pages/feedbackRouter.html'))
});

module.exports = diagnostics;
