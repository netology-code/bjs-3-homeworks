function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
};

const studentMaha = new Student ('Maha', 'Женский', 20);
const studentBob = new Student ('Bob', 'Мужской', 22);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
    if (this?.marks) {
    this.marks.push(...marksToAdd);
    };
};

Student.prototype.getAverage = function () {
    if (this.marks?.length > 0 ) {
    return this.marks.reduce((a, b) => a + b) / this.marks.length;
    }else return 0;
};

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};