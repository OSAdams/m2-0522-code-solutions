/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  this.fullName = this.firstName + ' ' + this.lastName;
  return this.fullName;
};

Student.prototype.getIntroduction = function () {
  this.introduction = 'Hello, my name is ' + this.getFullName() +
   ' and I am studying ' + this.subject + '.';
  return this.introduction;
};
