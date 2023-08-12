const StudentList = require('./student-list');

class Socket {
  constructor(io) {
    this.io = io;
    this.studentList = new StudentList();

    this.socketsEvents();
  }

  socketsEvents() {
    console.log(this.studentList.getStudents());
  }
}

module.exports = Socket;
