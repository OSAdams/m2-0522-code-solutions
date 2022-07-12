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
