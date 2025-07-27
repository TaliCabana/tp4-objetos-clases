/* Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

 */

// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
class Avion {
  #nombre;
  #capacidad;
  #destino;
  #listaPasajeros;

  constructor(nomre, capacidad, destino) {
    this.#nombre = nomre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaPasajeros = [];
  }

  // Getter para acceder al nombre del avión desde otras clases:
  getNombre() {
    return this.#nombre;
  }
  // Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
  abordar(pasajero) {
    if (this.#listaPasajeros.length < this.#capacidad) {
      this.#listaPasajeros.push(pasajero);
      alert(
        `${pasajero} abordó el avión ${this.#nombre} con destino a ${
          this.#destino
        }.`
      );
    } else {
      alert(
        `El avión ${
          this.#nombre
        } está lleno, no se puede abordar más pasajeros.`
      );
    }
  }
  // Para no repetir código cada vez que se quiera mostrar la información de cada avión, conviene tener un método llamado obtenerInfoAvion() dentro de la clase Avion, que devuelva un texto con los datos del avión
  obtenerInfoAvion() {
    return `✈ Avión: ${this.#nombre}, Destino: ${this.#destino}, Capacidad: ${
      this.#capacidad
    }`;
  }
}

// Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones
class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;

  constructor(nombreAeropuerto) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = [];
  }

  // método agregarAvion, el cual recibirá un objeto de tipo Avión
  agregarAvion(avion) {
    this.#listaAviones.push(avion);
    console.log(
      `✔ Avión ${avion.getNombre()} agregado al aeropuerto ${
        this.#nombreAeropuerto
      }.`
    );
  }

  //método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
  buscarAvion(nombreAvion) {
    const avionEncontrado = this.#listaAviones.find(
      (avion) => avion.getNombre() === nombreAvion
    );

    if (avionEncontrado) {
      console.log(`✅ Avión encontrado: ${avionEncontrado.obtenerInfoAvion()}`);
      return avionEncontrado;
    } else {
      console.log(
        `❌ Avión con nombre "${nombreAvion}" no fue encontrado en ${
          this.#nombreAeropuerto
        }.`
      );
      return null;
    }
  }
}

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional"
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

// crear 3 objetos aviones con diferentes destinos.
const avion1 = new Avion("Brilli", 2, "Portugal");
const avion2 = new Avion("Pink", 3, "España");
const avion3 = new Avion("Love", 1, "Alemania");

//Agregar los 3 aviones al aeropuerto
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// buscar un avión y usar el método abordar.
const avionBuscado = aeropuerto.buscarAvion("Pink");

if (avionBuscado) {
  avionBuscado.abordar("Tali");
  avionBuscado.abordar("Pipi");
  avionBuscado.abordar("Gigi");
  avionBuscado.abordar("Cuchi"); // Este ya no entra, el avión tiene capacidad 3
}
