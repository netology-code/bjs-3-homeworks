// Функция-конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // Изначально пустой массив оценок
}

// Метод для установки предмета
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function(...marksToAdd) {
  // Если студент отчислен, добавление оценок невозможно
  if (this.excluded) {
    console.log(`${this.name} отчислен, не можно добавить оценки.`);
    return;
  }
  
  // Добавляем оценки в массив marks
  if (!this.marks) {
    this.marks = [];
  }
  this.marks.push(...marksToAdd);
};

// Метод для расчёта среднего балла
Student.prototype.getAverage = function() {
  // Если у студента нет оценок, возвращаем 0
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  // Считаем среднее арифметическое
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Метод для исключения студента
Student.prototype.exclude = function(reason) {
  // Удаляем свойства subject и marks, добавляем свойство excluded с причиной
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

// Пример использования:
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0 (нет оценок)
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {name: "Василиса", gender: "женский", age: 19, marks: [4, 5, 4, 5], subject: "Algebra"}

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}
