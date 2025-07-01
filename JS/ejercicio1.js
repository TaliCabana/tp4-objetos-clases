/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();    auto encendido
objeto.apadar()       El auto se apagó
*/

// Notación literal
const auto = {
    // Propiedades
    color: plateado,
    marca: Toyota,
    modelo: Corolla,
    estado: apagado,

    // Método para encender:
    encender: function(){
        console.log(this) // Objeto
        if (this.estado){
            document.writeln(`<p>El auto debe encenderse</p>`)
        }
        
    }
}