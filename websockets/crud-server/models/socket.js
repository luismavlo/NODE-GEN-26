const StudentList = require('./student-list');

class Socket {
  constructor(io) {
    this.io = io;
    this.studentList = new StudentList();

    this.socketsEvents();
  }

  socketsEvents() {
    //ESCUCHANDO TODOS LOS CLIENTES QUE SE CONECTAN
    this.io.on('connection', (socket) => {
      socket.emit('current-students', this.studentList.getStudents());
    });
  }
}

module.exports = Socket;
