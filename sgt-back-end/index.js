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
        error: 'an unexpected error occured'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (!name || !score || !course) {
    res.status(400).json({
      error: 'name, course, and score are required'
    });
    return;
  } else if (parseInt(score) !== Number(score) || score > 100 || score < 1) {
    res.status(400).json({
      error: 'score must be a an integer in range of 1 and 100'
    });
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
      console.error(new Error(err));
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const gradeId = req.params.gradeId;
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'name, course, and score are required'
    });
    return;
  } else if (!gradeId || parseInt(gradeId) !== Number(gradeId)) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  } else if (parseInt(score) !== Number(score) || score > 100 || score < 1) {
    res.status(400).json({
      error: 'score must be an integer in range of 1 and 100'
    });
    return;
  }
  const sql = `
    UPDATE grades
       SET name = $1,
           course = $2,
           score = $3
     WHERE "gradeId" = $4
 RETURNING *
  `;
  const values = [name, course, score, gradeId];
  db.query(sql, values)
    .then(result => {
      const updatedStudent = result.rows[0];
      if (!updatedStudent) {
        res.status(404).json({
          error: 'gradeId not found'
        });
      } else {
        res.status(200).json(updatedStudent);
      }
    })
    .catch(err => {
      console.error(new Error(err));
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});
