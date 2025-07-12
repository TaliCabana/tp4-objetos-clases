/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

// creo la clase con sus propiedades
class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  // método:
  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent Generation (los niños de las posguerra)";
      rasgo = "Austeridad";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else {
        generacion = "Generación desconocida";
        rasgo = "Actualmente no se dispone de esta información"
    }
    document.writeln(`<p>${this.nombre} pertenece a la ${generacion}. Su rasgo característico es: ${rasgo}.</p>`)
  }
}

// Pido datos al usuario por prompt:
const nombre = prompt("¿Cuál es tu nombre?");
const edad = parseInt(prompt("¿Qué edad tenés?"));
const DNI = prompt("Ingresá tu DNI sin puntos:");
const sexo = prompt("¿Con qué sexo te identificás más? (H o M)").toUpperCase();
const peso = parseFloat(prompt("Indicá cuánto pesás en [kg]:"));
const altura = parseFloat(prompt("Indicá cuál es tu altura en [m]:"));
const anioNacimiento = parseInt(prompt("Para que te informemos datos sobre tu generación, ingresá a continuación tu año de nacimiento:"));

const persona1 = new Persona (nombre, edad, DNI, sexo, peso, altura, anioNacimiento);

// Llamo al método:
persona1.mostrarGeneracion()