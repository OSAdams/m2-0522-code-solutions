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

app.post('api/grades', (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  const course = req.body.course;
  if (!name || !score || !course) {
    res.send(400).json({
      error: 'name, score, and course are required'
    });
  } else if (parseInt(score) !== Number(score) && (score > 100 || score < 1)) {
    res.send(400).json({
      error: 'score must be a postive integer'
    });
  }
  const sql = `INSERT ${req.params.name},
                      ${req.params.course},
                      ${req.params.score}
                 INTO grades`;
  db.query(sql)
    .then(result => {

    });
});
