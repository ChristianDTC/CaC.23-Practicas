//14) Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven.

let nombre,
  edad,
  nombreJoven,
  edadJoven,
  control = true;

do {
  nombre = prompt("Ingrese el nombre de la persona. ( * = SALIR)");
  if (nombre != "*") {
    edad = parseInt(prompt("Ingrese la edad"));
    if (control) {
      nombreJoven = nombre;
      edadJoven = edad;
      control = false;
    }
    if (edad < edadJoven) {
      nombreJoven = nombre;
      edadJoven = edad;
    }
  }
} while (nombre != "*");

if (control) {
  document.write("NO SE INGRESO NINGUN DATO");
} else {
  document.write(`La persona más joven se llama ${nombreJoven} <br> y tiene ${edadJoven} años`);
}
