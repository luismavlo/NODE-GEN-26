const Student = require('./student');

class StudentList {
  constructor() {
    this.students = [
      new Student('Kevin'),
      new Student('Jesus'),
      new Student('Govanni'),
      new Student('Erick'),
    ];
  }

  getStudents() {
    return this.students;
  }

  addStudent(name) {
    const newStudent = new Student(name);
    this.students.push(newStudent);
    return this.students;
  }

  removeStudent(id) {
    this.students = this.students.filter((student) => student.id !== id);
  }

  increaseVotes(id) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.votes += 1;
      }

      return student;
    });
  }

  changeStudentName(id, name) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.name = name;
      }

      return student;
    });
  }

  //TODO: hacer una funcionalidad para eliminar los 3 ultimos que tengan menos votos
}

module.exports = StudentList;
