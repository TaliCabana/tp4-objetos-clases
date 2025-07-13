// Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

// Clase: Persona
class Persona {
    // Propiedades privadas:
    #nombre;
    #edad;
    #profesion;
    constructor (nombre, edad, profesion){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
    }

    // Getters
    getNombre(){
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    getProfesion(){
        return this.#profesion;
    }

    // Setters:
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setEdad(edad){
        this.#edad = edad;
    }
    setProfesion(profesion){
        this.#profesion = profesion;
    }

    // Métodos:
    saludar(){
        document.writeln(`<p>Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años y soy ${this.#profesion}. </p><br>`)
    }

    despedirse(){
        document.writeln(`<p>Mi nombre es ${this.#nombre}. Hasta pronto! </p><br>`)
    }
}

// Pido datos a la primer persona:
const nombre1 = prompt("Ingresá el nombre de la primera persona de tu lista:");
const edad1 = parseInt(prompt(`¿Cuál es la edad de ${nombre1}?`));
const profesion1 = prompt(`Indicame la profesión de ${nombre1}`);

// Pido datos a la segunda persona:
const nombre2 = prompt("Ingresá el nombre de la segunda persona de tu lista:");
const edad2 = parseInt(prompt(`¿Cuál es la edad de ${nombre2}?`));
const profesion2 = prompt(`Indicame la profesión de ${nombre2}`);

// Creo los objetos Persona:
const persona1 = new Persona (nombre1, edad1, profesion1);
const persona2 = new Persona (nombre2, edad2, profesion2);

// Ejecutar los métodos:
persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();

