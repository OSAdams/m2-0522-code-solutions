const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  fs.writeFile(process.argv[3], `${data}\n`, 'utf8', err => {
    if (err) {
      console.error(err);
    }
  });
});
