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

// !!! I googled and found a forEach method but it felt like cheating.
// Below is what I came up with, after trial and error using different kinds of
// loops. It works, but is obviously limited to how many times I want to call the
// readFile method of the fs object. Anyway, even if approved, if you could share
// a hint to another solution I'm all ears. This was frustrating and fun.

// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data);
//   fs.readFile(process.argv[3], 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//     fs.readFile(process.argv[4], 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       }
//       console.log(data);
//     });
//   });
// });
