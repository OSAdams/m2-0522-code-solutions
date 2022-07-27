const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `SELECT name,
                      course,
                      score
                 FROM grades
                ORDER BY "gradeId"`;
  db.query(sql)
    .then(result => {
      const students = result.rows;
      res.status(200).json(students);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const error = {};
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (!name || !score || !course) {
    error.error = 'Name, course, and score are required';
    res.status(400).json(error);
    return;
  } else if (parseInt(score) !== Number(score) || score > 100 || score < 1) {
    error.error = 'Score must be a an integer in range of 1 and 100';
    res.status(400).json(error);
    return;
  }
  const sql = `
              INSERT INTO grades (name, course, score)
              VALUES ($1, $2, $3)
           RETURNING *
            `;
  const values = [name, course, score];
  db.query(sql, values)
    .then(result => {
      const newStudent = result.rows[0];
      res.status(201).json(newStudent);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});
