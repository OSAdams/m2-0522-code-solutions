const fs = require('fs');

const nodeArgs = process.argv.slice(2);

nodeArgs.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  });
});
