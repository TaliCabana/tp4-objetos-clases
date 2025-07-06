// Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings).
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona.
// Finalmente, imprime los hobbies de la persona usando un bucle.
// Usa prompt para ingresar los datos de la persona y el nuevo hobby.

// 1ero defino las variables:
const nombreUsuario = prompt("¿Cuál es tu nombre?");
const edadUsuario = parseInt(prompt("Indicame cuántos años tenés"));
const hobby = prompt("Contame cuál es tu hobby favorito");

// objeto Persona:
const Persona = {
  nombre: nombreUsuario,
  edad: edadUsuario,
  hobbies: [hobby],
};

// defino la función:
function agregarHobby(Persona, nuevoHobby) {
  Persona.hobbies.push(nuevoHobby); // push: agregar elemento al final del array
}

const nuevoHobby = prompt("Contame cuál es tu otro hobby preferido");
agregarHobby(Persona,nuevoHobby); // Llamo a la función para que guarde el valor del segundo hobby

document.writeln(`<p>Los hobbies de ${Persona.nombre} son:</p>`);
document.writeln(`<ul>`);
for (let hobby = 0; hobby < Persona.hobbies.length; hobby++) {
  document.writeln(`<li>${Persona.hobbies[hobby]}</li>`)
}
document.writeln(`</ul>`)
