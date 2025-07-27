// Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 


// Clase llamada "Animal" , que tenga las propiedades "nombre" y "edad" (propiedad privadas)
class Animal {
    #nombre;
    #edad;

constructor (nombre, edad) { // el constructor se compone de parámetros)
    this.#nombre = nombre; // #propiedad del "objeto" ("this" se refiere al objeto) = parámetro
    this.#edad = edad;
}
// Este constructor toma dos valores cuando se crea un nuevo animal (nombre y edad) y los guarda de forma privada en el objeto, usando #nombre y #edad.

// Método para acceder al nombre (get) (uso getters y setter para leer y modificar, respectivamente un valor)
getNombre() {
    return this.#nombre;
}

// y el método "emitirSonido"
emitirSonido () {
    console.log("Este animal hace un sonido.")
} 
}

// crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal"
class Perro extends Animal {
    emitirSonido(){
        console.log(`${this.getNombre()} dice ¡Guau!`) ;
    }
}

class Gato extends Animal {
    emitirSonido(){
        console.log(`${this.getNombre()} dice ¡Miau!`) ;
    }
}

// crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato"
const miPerra = new Perro ("Lizi", 18);

const miGata = new Gato ("Alma",8)


//y tengan su propio método "emitirSonido".



// y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado
miPerra.emitirSonido();
miGata.emitirSonido();