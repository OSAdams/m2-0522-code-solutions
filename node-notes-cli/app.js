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
} // else if (keyWord === 'create') {
//   // ignore
// }
