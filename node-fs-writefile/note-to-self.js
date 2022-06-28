const fs = require('fs');

fs.writeFile('note.txt', `${process.argv[2]} \n`, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
