// Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. 
// Calcula la calificación más alta del alumno y clasifica al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

// defino las variables
const nombreAlumno = prompt("¿Cuál es tu nombre?");
const cursoAlumno = prompt("¿En qué curso estás?");
const calificacionAlumno =parseFloat(prompt("Ingresá tu primera calificación:"))

// creo el objeto Alumno
const alumno = {
    nombre: nombreAlumno,
    curso: cursoAlumno,
    calificaciones: [calificacionAlumno]
}

// genero la función
function agregarNota(alumno, nuevaNota){
    if(!isNaN(nuevaNota) && nuevaNota>=0 && nuevaNota<=10){
        alumno.calificaciones.push(nuevaNota);
    } else{
        alert("La nota ingresada no es válida.")
    }
}

// llamo a la función y guardo su valor:
const nuevaNota = parseFloat(prompt("Ingresá otra calificación:"));
agregarNota(alumno, nuevaNota);

// calculo la calificacion mas alta
function obtenerNotaMaxima(alumno){
    return Math.max(...alumno.calificaciones)
}

// clasifico la calificacion (con letra)
function clasificarAlumno(notaMaxima){
    if(notaMaxima>=9) return "A";
    else if (notaMaxima >=7) return "B";
    else if (notaMaxima >=5) return "C";
    else return "D";
}

const notaMaxima = obtenerNotaMaxima(Alumno);
const clasificacion = clasificarAlumno(notaMaxima)

document.writeln(`<h3>Alumno: ${alumno.nombre}</h3>`);
document.writeln(`<p>Curso: ${alumno.curso}</p>`);
document.writeln(`<p>Notas: ${alumno.calificaciones.join(", ")}</p>`);
document.writeln(`<p>Nota más alta: ${notaMaxima}</p>`);
document.writeln(`<p>Clasificación: ${clasificacion}</p>`);