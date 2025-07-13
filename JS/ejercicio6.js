/* Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    #isbn;
    #titulo;
    #autor;
    #paginas;

    constructor(isbn, titulo, autor, paginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#paginas = paginas
    }

    // Getters para leer
    get isbn (){
        return this.#isbn;
    }
    get titulo(){
        return this.#titulo;
    }
    get autor(){
        return this.#autor;
    }
    get paginas(){
        return this.#paginas;
    }

    // Setters para modificar
    set isbn(isbnIngresado){
        this.#isbn = isbnIngresado;
    }
    set titulo(tituloIngresado){
        this.#titulo = tituloIngresado;
    }
    set autor(autorIngresado){
        this.#autor = autorIngresado
    }
    set paginas(paginasIngresadas){
        this.#paginas = paginasIngresadas
    }

    // Método para mostrar la información del libro:
    mostrarLibro(){
        document.writeln(`<p>El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene páginas ${this.paginas}.</p>`);
    }
}

// Crear 2 objetos libro:
const libro1 = new Libro("978-0156012195", "El principito", "Antoine de Saint-Exupéry", 96);
const libro2 = new Libro("978-0062315007", "El alquimista", "Paulo Coelho", 208);

// Mostrar datos de cada libro:
document.writeln(`<h3>Información de los libros:</h3>`);
libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar cantidad de páginas:
if (libro1.paginas > libro2.paginas){
    document.writeln(`El libro ${libro1.titulo} tiene más páginas.`)
} else if (libro1.paginas < libro2.paginas){
    document.writeln(`El libro ${libro2.titulo} tiene más páginas.`)
} else {
    document.writeln("Ambos libros tienen la misma cantidad de páginas.")
}