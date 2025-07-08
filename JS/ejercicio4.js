/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  // Impromir datos:
  imprimirDatos() {
    document.writeln(`<p>Código: ${this.codigo}</p>`);
    document.writeln(`<p>Nombre: ${this.nombre}</p>`);
    document.writeln(`<p>Precio: ${this.precio}</p>`);
  }
}

// Creación de 3 instancias del objeto
const producto1= new Producto("Skala01", "Amido de Milho", 9000);
const producto2= new Producto("Auril01", "Protector Non Oil", 18000);
const producto3= new Producto("BekimSh1", "Argán", 22000);

// Array:
const listaProductos = [producto1, producto2, producto3];

// Usar el metodo de imprimir datos creado:
document.writeln(`<b>Lista de productos:</b>`);
for (let p = 0; p < listaProductos.length; p++)
{
  listaProductos[p].imprimirDatos();
}