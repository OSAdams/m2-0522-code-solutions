const express = require('express');
const jsonData = require('./data.json');
const app = express();
const fs = require('fs');

// eslint-disable-next-line
app.listen(3000, () => { console.log('Express server listening on port 3000'); });

app.get('/api/notes/', (req, res) => {
  const notes = [];
  for (const id in jsonData.notes) {
    notes.push(jsonData.notes[id]);
  }
  res.status(200).json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const error = {};
  if (Number(req.params.id) < 0 || parseInt(req.params.id) !== Number(req.params.id)) {
    error.error = 'id must be a positive whole integer';
    res.status(400).json(error);
  } else if (!jsonData.notes[req.params.id]) {
    error.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(error);
  } else {
    res.status(200).json(jsonData.notes[req.params.id]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const error = {};
  let notes = {};
  if (!req.body.content) {
    error.error = 'content is a required field';
    res.status(400).json(error);
  } else {
    jsonData.notes[jsonData.nextId] = req.body;
    jsonData.notes[jsonData.nextId].id = jsonData.nextId;
    notes = jsonData.notes[jsonData.nextId];
    const jsonString = JSON.stringify(jsonData, null, 2);
    jsonData.nextId++;
    fs.writeFile('data.json', jsonString, 'utf8', err => {
      if (err) {
        error.error = 'an unexpected error occured';
        res.status(500).json(error);
      } else {
        res.status(201).json(notes);
      }
    });
  }
});
