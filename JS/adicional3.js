// Crea un objeto libro que tenga propiedades título, autor, año y género.
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter.
// Usa prompt para ingresar los datos de los libros y el género.

const libros = [];

const cantLibros = parseInt(prompt("¿Cuántos libros vas a ingresar?"));

if (isNaN(cantLibros) || cantLibros <= 0) {
  alert(
    "Cantidad de libros inválida. Recarga la página para volver a intentar."
  );
} else {
  for (let libro = 0; libro < cantLibros; libro++) {
    const titulo = prompt(
      `Ingresá el título del libro número ${libro + 1} de tu lista`
    ).toUpperCase();
    const autor = prompt(
      `Ingresá el autor del libro número ${libro + 1} de tu lista`
    ).toUpperCase();
    const anio = prompt(
      `Ingresá el año de edición del libro número ${libro + 1} de tu lista`
    );
    const genero = prompt(
      `Ingresá el genero literario que corresponde al libro número ${
        libro + 1
      } de tu lista`
    ).toUpperCase();

    if (titulo && autor && !isNaN(anio) && genero) {
      libros.push({
        titulo: titulo, // propiedad: valor ingresado
        autor: autor,
        anio: anio,
        genero: genero,
      });
    } else {
      document.writeln(
        `<p>El libro número ${
          libro + 1
        } de tu lista no fue cargado correctamente.</p>`
      );
    }
  }
}

// filtro para el género
function filtrarPorGenero(arrayLibros, generoBuscado) {
  return arrayLibros.filter(function (libro) {
    return libro.genero === generoBuscado.toUpperCase();
  });
}

const generoIngresado = prompt("¿Qué genero buscás?").toUpperCase();
const librosFiltrados = filtrarPorGenero(libros, generoIngresado); // nuevo array con la selección de los libros filtrados

if (librosFiltrados.length > 0) { // si el array de libros filtrados tiene al menos un elemento, entonces...
  document.writeln(`<h3>Libros del género "${generoIngresado}":</h3>`);
  document.writeln(`<ul>`);
  for (let iLibro = 0; iLibro < librosFiltrados.length; iLibro++) {
    const libro = librosFiltrados[iLibro];
    document.writeln(
      `<li>${libro.titulo} del autor ${libro.autor} del año ${libro.anio}</li>`
    );
  }
  document.writeln(`</ul>`);
} else {
  document.writeln(`<p>No se encontraron libros del género "${generoIngresado}".</p>`);
}
