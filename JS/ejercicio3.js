// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// Perímetro= 2*(alto+ancho)

// Área = alto*ancho

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  // Metodo modificar
  modificarDimensiones(nuevoAlto, nuevoAncho) {
    this.alto = nuevoAlto;
    this.ancho = nuevoAncho;
  }

  // Método mostrar Prop
  mostrarPropiedades() {
    document.writeln(`<p>Alto: ${this.alto}</p>`);
    document.writeln(`<p>Ancho: ${this.ancho}</p>`);
  }

  // Método cálculo Perim:
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  // Método calculo Área:
  calcularArea() {
    return this.alto * this.ancho;
  }
}

const alto = parseFloat(
  prompt("Ingresá el alto que quieras que tenga el rectángulo:")
);
const ancho = parseFloat(
  prompt("Ingresá el ancho que quieras que tenga el rectángulo:")
);

const nuevoRectangulo = new Rectangulo(alto, ancho);

// Mostrar propiedades:
document.writeln(`<p><b>Propiedades del rectángulo:</b></p>`);
nuevoRectangulo.mostrarPropiedades();

// Mostrar perim y area:
document.writeln(`<p>Perímetro: ${nuevoRectangulo.calcularPerimetro()}</p>`);
document.writeln(`<p>Área: ${nuevoRectangulo.calcularArea()}</p>`);

// Modif dimensiones:
const nuevoAlto = parseFloat(prompt("Si querés modificar las dimensiones del rectángulo, ingresá a continuación cuánto querés que mida el Alto:"));
const nuevoAncho = parseFloat(prompt("Si querés modificar las dimensiones del rectángulo, ingresá a continuación cuánto querés que mida el Ancho:"))
nuevoRectangulo.modificarDimensiones(nuevoAlto,nuevoAncho);

// Prop actualizadas:
document.writeln(`<p>Con las nuevas dimensiones brindadas de alto ${nuevoAlto} y de ancho ${nuevoAncho} quedan así las Propiedades:</p>`)
document.writeln(`<p>Perímetro nuevo: ${nuevoRectangulo.calcularPerimetro()}</p>`)
document.writeln(`<p>Área nueva: ${nuevoRectangulo.calcularArea()}</p>`)