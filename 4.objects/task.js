function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

let student1 = new Student("Полина", "женский", 21);
let student2 = new Student("Игорь", "мужской", 22);
let student3 = new Student("Дарья", "женский", 20);

student1.setSubject("Философия");
student2.setSubject("Информатика");
student3.setSubject("Право");

student1.addMarks(4, 5, 5, 5);
student2.addMarks(5, 4);
student3.addMarks(3, 4, 5, 4, 4);

console.log(student1.getAverage());
console.log(student2.getAverage());
console.log(student3.getAverage());

student2.exclude("пропуск занятий");