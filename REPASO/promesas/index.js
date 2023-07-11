function esperar(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function saludar(nombre) {
  console.log("Hola 😀 ", nombre);
  await esperar(2000);
  console.log("Como te va?");
}

saludar("Edison!");
