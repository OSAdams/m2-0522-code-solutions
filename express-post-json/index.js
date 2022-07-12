const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000')
});

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const jsonGrades = [];
  for (const i in grades) {
    jsonGrades.push(grades[i]);
  }
  res.json(jsonGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});
