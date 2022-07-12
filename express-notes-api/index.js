const express = require('express');
const jsonData = require('./data.json');
const app = express();

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
    error.error = 'id does not exist';
    res.status(404).json(error);
  } else {
    res.status(200).json(jsonData.notes[req.params.id]);
  }
});
