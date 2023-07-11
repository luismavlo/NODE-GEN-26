function saludar(nombre, callback) {
  console.log("Eyy! 👋 ", nombre);
  callback();
}

const despedir = () => {
  console.log("Adios desde la linea 7!");
};

saludar("Pedro", despedir);
