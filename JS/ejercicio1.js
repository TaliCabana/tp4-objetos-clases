/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();    auto encendido
objeto.apadar()       El auto se apagó
*/

// Notación literal
const auto = {
  // Propiedades
  color: "plateado",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false, // primero no está encendido

  // Método para encender:
  encender: function () {
    console.log(this); // Objeto
    if (this.encendido === false) {
      // si el auto está apagado
      this.encendido = true;
      document.writeln("El auto se encendió.<br>");
    } else {
      // el auto no está apagado, o sea está encendido
      document.writeln("El auto ya estaba encendido.<br>");
    }
  },

  // Método para apagar el auto:
  apagar: function () {
    if (this.encendido === true) {
      this.encendido = false;
      document.writeln("El auto estaba encendido y se apagó.<br>");
    } else {
      document.writeln("El auto ya estaba apagado. <br>");
    }
  },
};

const accion = prompt(
  "¿Queres encender o apagar el auto? Escribí ENCENDER o APAGAR"
);

if ((encendido = false)) {
  if (accion === "ENCENDER") {
    auto.encender();
  } else if (accion === "APAGAR") {
    auto.apagar();
  } else {
    document.writeln("No elegiste una opción válida");
  }
} else {
  if (accion === "ENCENDER") {
    auto.encender();
  } else if (accion === "APAGAR") {
    auto.apagar();
  } else {
    document.writeln("No elegiste una opción válida");
  }
}

/*
auto.encender(); // Tendría que verse "El auto se encendió."
auto.apagar();   // Tendría que verse "El auto estaba encendido y se apagó."
auto.apagar();   // Tendría que verse "El auto ya estaba apagado."
*/
