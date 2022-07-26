const potato = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() <= 0.5
        ? resolve('Where did he come from?')
        : reject(new Error('unnnnnecessary'));
    }, 1500);
  });
};

const myPotato = potato();

myPotato.then(joe => {
  console.log(joe);
}).catch(err => {
  console.error(err.joe);
});
