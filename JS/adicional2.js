// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa prompt para ingresar los datos de los estudiantes.

const estudiantes = [];

const cantEstudiantes = parseInt(
  prompt("¿Cuántos estudiantes tenes en tu curso?")
);

if (isNaN(cantEstudiantes) || cantEstudiantes <= 0) {
  document.writeln(
    "Cantidad inválida. Actualizá la página para intentar nuevamente."
  );
} else {
  for (let nroAlumno = 0; nroAlumno < cantEstudiantes; nroAlumno++) {
    const nombre = prompt(
      `Ingresá el nombre del estudiante ${nroAlumno + 1} de tu lista`
    );
    const nota = parseFloat(prompt(`Ingresá la nota del ${nombre}`));

    if (nombre && !isNaN(nota)) {
      estudiantes.push({ nombre: nombre, nota: nota });
    } else {
      document.writeln(
        `<p>Estudiante ${
          nroAlumno + 1
        } no se muestra por contener datos inválidos. Revisar y actualizar la página para ingresar correctamente</p>`
      );
    }
  }

  function calcularPromedio(listaAlumnos) {
    let suma = 0;
    for (let nroAlumno = 0; nroAlumno < listaAlumnos.length; nroAlumno++) {
      // 2 decimales
      suma = suma + listaAlumnos[nroAlumno].nota;
    }
    return suma / listaAlumnos.length.toFixed(2); //prom c2 decim
  }

  document.writeln(`<h3>Lista de Alumnos:</h3>`);
  document.writeln(`<ul>`);
  for (let nroAlumno = 0; nroAlumno < estudiantes.length; nroAlumno++) {
    document.writeln(
      `<li>${estudiantes[nroAlumno].nombre}: ${estudiantes[nroAlumno].nota}</li>`
    );
  }
  document.writeln(`</ul>`);

  const promedio = calcularPromedio(estudiantes);
  document.writeln(`<p>Promedio de calificaciones: ${promedio}</p>`);
}
