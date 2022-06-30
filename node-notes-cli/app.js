const fs = require('fs');

const keyWord = process.argv[2];
const keyWordLib = ['read', 'create', 'update', 'delete'];

if (!keyWordLib.includes(keyWord)) {
  console.error({ error: 'invalid command' });
} else if (keyWordLib.includes(keyWord)) {
  if (keyWord === 'read') {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
      const notesObj = JSON.parse(data);
      for (const notesId in notesObj.notes) {
        console.log(notesId + ': ' + notesObj.notes[notesId]);
      }
    });
  } else if (keyWord === 'create') {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
      const notesObj = JSON.parse(data);
      const newId = notesObj.nextId;
      if (!process.argv[3]) {
        console.error({ error: 'invalid argument. please input a string' });
        return;
      }
      notesObj.notes[newId] = process.argv[3];
      notesObj.nextId++;
      console.log(`Note ID ${newId} successfully created`);
      fs.writeFile('data.json', JSON.stringify(notesObj, null, 2), 'utf8', err => {
        if (err) {
          console.error(err);
        }
      });
    });
  } else if (keyWord === 'update') {
    const inputId = process.argv[3];
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
      const notesObj = JSON.parse(data);
      if (isNaN(Number(inputId)) || Math.floor(inputId) !== Number(inputId)) {
        console.error({ error: 'id must be a whole number' });
        return;
      } else if (!notesObj.notes[inputId]) {
        console.error({ error: 'id does not exist' });
        return;
      } else if (!process.argv[4]) {
        console.error({ error: 'invalid argument. please input a string' });
        return;
      }
      for (const notesObjId in notesObj.notes) {
        if (notesObjId === inputId) {
          notesObj.notes[notesObjId] = process.argv[4];
          console.log(`Note ID ${notesObjId} successfully updated`);
        }
      }
      fs.writeFile('data.json', JSON.stringify(notesObj, null, 2), 'utf8', err => {
        if (err) {
          console.error(err);
        }
      });
    });
  } else if (keyWord === 'delete') {
    const inputId = process.argv[3];
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      }
      const notesObj = JSON.parse(data);
      if (isNaN(Number(inputId)) || Math.floor(inputId) !== Number(inputId)) {
        console.error({ error: 'id must be a whole number' });
        return;
      } else if (!notesObj.notes[inputId]) {
        console.error({ error: 'id does not exist' });
        return;
      }
      for (const notesObjId in notesObj.notes) {
        if (notesObjId === inputId) {
          delete notesObj.notes[notesObjId];
          console.log(`Note ID ${notesObjId} successfully deleted`);
        }
      }
      fs.writeFile('data.json', JSON.stringify(notesObj, null, 2), 'utf8', err => {
        if (err) {
          console.error(err);
        }
      });
    });
  }
}
