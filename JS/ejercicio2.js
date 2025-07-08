/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

 */

class Cuenta {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  ingresar(dinero) {
    if (dinero > 0) {
      this.saldo = this.saldo + dinero;
      document.writeln(
        `<p>Ingresaste un importe de $${dinero}. Tu nuevo saldo es de $${this.saldo}</p>`
      );
    } else {
      alert("El importe ingresado debe ser mayor a $0.");
    }
  }

  extraer(dinero) {
    if (dinero > 0 && dinero <= this.saldo) {
      this.saldo = this.saldo - dinero;
      document.writeln(
        `<p>El importe extraído es de $${dinero}. Tu saldo actual ahora es de $${this.saldo}</p>`
      );
    } else if (dinero > this.saldo) {
      alert("El importe que queres retirar es mayor a tu saldo disponible.");
    } else {
      document.writeln(
        "<p>Si querés retirar dinero, debes ingresar un valor mayor a $0,00.</p>"
      );
    }
  }

  informar() {
    document.writeln(`<p><b>Titular:</b> ${this.titular}</p>`);
    document.writeln(`<p>Saldo: $${this.saldo}</p>`);
  }
}

// Una propiedad titular con el valor "Alex".
const cuentaAlex = new Cuenta("Alex");

// Una propiedad saldo, teniendo como valor inicial 0.
document.writeln(`<p><b>Estado inicial de la cuenta:</b></p>`);
cuentaAlex.informar();

// mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Ingreso
const dineroIngresado = parseFloat(prompt("¿Cuánto dinero querrías ingresar?"));
cuentaAlex.ingresar(dineroIngresado);

// Extracción
const dineroExtraido = parseFloat(prompt("¿Cuánto dinero querrías extraer?"));
cuentaAlex.extraer(dineroExtraido);

// Mostrar estado de la cuenta (final)
document.writeln(`<p><b>Estado actual de la cuenta:</b></p>`);
cuentaAlex.informar();
