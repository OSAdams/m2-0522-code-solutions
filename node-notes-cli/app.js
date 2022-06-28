const fs = require('fs');

const keyWord = process.argv[2];

if (keyWord === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('error: ', err.message);
    }
    const notesObj = JSON.parse(data);
    for (const notesId in notesObj.notes) {
      console.log(notesId + ': ' + notesObj.notes[notesId]);
    }
  });
} else if (keyWord === 'create') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('error: ', err.message);
    }
    const notesObj = JSON.parse(data);
    const newId = notesObj.nextId;
    if (!process.argv[3]) {
      console.error({ error: 'invalid argument. please input a string' });
    }
    notesObj.notes[newId] = process.argv[3];
    notesObj.nextId++;
    fs.writeFile('data.json', JSON.stringify(notesObj, null, 2), 'utf8', err => {
      if (err) {
        console.error(err.message);
      }
    });
  });
}
