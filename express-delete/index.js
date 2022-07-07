const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const students = [];
  for (const student in grades) {
    students.push(grades[student]);
  }
  res.json(students);
});

app.delete('/api/grades/:id', (req, res) => {
  const error = { error: '' };
  if (!grades[req.params.id]) {
    error.error = `Invalid student ID. ${req.params.id} does not exist.`;
    res.status(400);
    res.send(error);
  } else {
    delete grades[req.params.id];
    res.sendStatus(204);
  }
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
