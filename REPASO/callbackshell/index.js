function saludar(nombre, callback) {
  console.log("Eyy 😀 ", nombre);
  setTimeout(() => {
    console.log("Como estas?");
    setTimeout(() => {
      callback();
    }, 2000);
  }, 2000);
}

function despedir() {
  console.log("Adios Nos vemos ahora, nos vamos a break");
}

saludar("Kevin!", despedir);
