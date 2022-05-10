/* exported yakko, wakko, dot */

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

const warnerPrototype = {
  describe: function () {
    const description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

const warnerFamily = [yakko, wakko, dot];

function addWarnerPrototype() {
  for (let i = 0; i < warnerFamily.length; i++) {
    Object.setPrototypeOf(warnerFamily[i], warnerPrototype);
  }
}

addWarnerPrototype();
