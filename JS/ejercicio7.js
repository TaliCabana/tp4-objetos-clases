/* Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

> aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
> existeContacto(Contacto): indica si el contacto pasado existe o no.
> listarContactos(): Lista toda la agenda
> buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
> eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
> agendaLlena(): indica si la agenda está llena.
> huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

 */

// Clase Contacto:
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre.trim().toUpperCase(); // con trim quito espacios antes y despues del texto; con uperCase pongo cualquier texto en mayuscula
    this.telefono = telefono;
  }
}

// Clase Agenda:
class Agenda {
  constructor(tamanio = 10) {
    this.tamanio = tamanio;
    this.contactos = [];
  }

  // Método: Añadir contacto:
  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se pueden añadir más contactos.");
      document.writeln(
        "<p>La agenda está llena. No se puede añadir más contctos</p>"
      );
    } else if (this.existeContacto(contacto)) {
      console.log(`El contacto ${contacto.nombre} ya existe`);
      document.writeln(`<p>El contacto ${contacto.nombre} ya existe</p>`);
    } else {
      this.contactos.push(contacto);
      console.log(`El contacto ${contacto.nombre} fue agregado correctamente.`);
      document.writeln(
        `El contacto ${contacto.nombre} fue agregado correctamente.`
      );
    }
  }

  // Verificar si existe
  existeContacto(contacto) {
    // c = cada elemento del array this.contactos
    // => (c.nombre) nombre del contacto del array === nombre del contacto por agregar (contacto.nombre):
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  } // some devuelve "true" si al menos un elemento del array cumple con la condición

  // Listar contactos
  listarContactos() {
    if (this.contactos.length === 0) {
      document.writeln("Agenda vacía");
    } else {
      document.writeln(`<h3>Lista de Contactos</h3><ul>`);
      // forEach es un método de arrays que ejecuta una funcion una vez por cada elemento (o sea por cada "c"). Qué hace la función? la función muestra (con document.writeln) una lista de nombres y teléfonos
      this.contactos.forEach((c) => {
        document.writeln(`<li>${c.nombre} - ${c.telefono}</li>`);
      });
      document.writeln("</ul>");
    }
  }

  // Buscar contacto por nombre
  buscarContacto(nombre) {
    const contacto = this.contactos.find(
      (c) => c.nombre === nombre.trim().toUpperCase()
    );
    if (contacto) {
      // con find busca en cada "c" del array el nombre ingresado (nombre.trim.toUpperCase), y si lo encuentra:
      document.writeln(
        `<p>El teléfono de ${nombre} es: ${contacto.telefono}</p>`
      );
    } else {
      document.writeln(
        `No se encontró ningún contacto con el nombre ${nombre}`
      );
    }
  }

  // Eliminar contacto
  eliminarContacto(contacto) {
    // Necesito saber el índice o sea la ubicación del contacto que quiero eliminar, entonces con el nombre quiero que me devuelva la posición en el array
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (index !== -1) {
      // arranca en 0, o sea que para cualquier valor no negativo:
      this.contactos.splice(index, 1); // la posición en donde se encuentra (index) y la cant de elementos que quiero eliminar (1 en este caso)
      document.writeln(
        `El contacto ${contacto.nombre} fue eliminado correctamente`
      );
    } else {
      document.writeln(
        `No se encontró el contacto ${contacto.nombre} para eliminar.`
      );
    }
  }

  // ¿Agenda llena?

  agendaLlena() {
    return this.contactos.length >= this.tamanio;
  }

  // Huecos libres:
  huecosLibres() {
    return this.tamanio - this.contactos.length;
  }
}

// Programa:
const agenda = new Agenda(); // tamaño por defecto 10
let opcion = "";

do {
  opcion = prompt(
    `AGENDA TELEFÓNICA
        Seleccione una opción:
        1 - Añadir contacto
        2 - ¿Existe ya el contacto que quiere ingresar?
        3 - Lista de contactos
        4 - Buscar teléfono por nombre
        5 - Eliminar contacto
        6 - ¿Está llena la agenda?
        7 - ¿Hay espacio disponible?
        0 - Salir`
  );

  switch (opcion) {
    case "1":
      const nombreNuevo = prompt("Nombre del contacto:");
      const telefonoNuevo = prompt("Teléfono:");
      agenda.aniadirContacto(new Contacto(nombreNuevo, telefonoNuevo));
      break;

    case "2":
      const nombreBuscar = prompt(
        "Nombre del contacto a verificar si ya fue agendado:"
      );
      const existe = agenda.existeContacto(new Contacto(nombreBuscar));
      document.writeln(
        `${existe ? "El contacto existe" : "El contacto no existe"}`
      );
      break;

    case "3":
      agenda.listarContactos();
      break;

    case "4":
      const nombreTel = prompt("Nombre del contacto:");
      agenda.buscarContacto(nombreTel);
      break;

    case "5":
      const nombreEliminar = prompt("Nombre del contacto que deseas eliminar:");
      agenda.eliminarContacto(new Contacto(nombreEliminar));
      break;

    case "6":
      document.writeln(
        `${
          agenda.agendaLlena() // Es un método,no una vble; entonces van ()
            ? "La agenda está llena"
            : "Aún hay espacio disponible en la agenda"
        }`
      );
      break;

    case "7":
      document.writeln(
        `La cantidad de huecos libres en la agenda es de: ${agenda.huecosLibres()}`
      );
      break;

    case "0":
      document.writeln("Gracias por usar esta agenda.");
      break;

    default:
      alert("Opción no válida. Tenés que elegir una opción del 0 al 7.");
  }
} while (opcion !== "0");
