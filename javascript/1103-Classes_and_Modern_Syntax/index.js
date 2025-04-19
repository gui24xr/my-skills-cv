/*
  Concepto 11: Classes and Modern Syntax
  Descripción:
  Uso de las clases en JavaScript moderno con las palabras clave class, extends y super.
*/

// ------------------ 1. Creación de una clase ------------------

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Instanciando un objeto de la clase Persona
const juan = new Persona('Juan', 30);
juan.saludar();  // "Hola, soy Juan y tengo 30 años."

// ------------------ 2. Herencia con `extends` ------------------

// La palabra clave `extends` permite que una clase herede de otra
class Empleado extends Persona {
  constructor(nombre, edad, puesto) {
    // Llamando al constructor de la clase base (Persona)
    super(nombre, edad);
    this.puesto = puesto;
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
  }
}

// Instanciando un objeto de la clase Empleado
const maria = new Empleado('María', 28, 'Desarrolladora');
maria.saludar();  // "Hola, soy María y tengo 28 años."
maria.trabajar(); // "María está trabajando como Desarrolladora."

// ------------------ 3. Uso de `super` ------------------

// `super` se usa para llamar a métodos o al constructor de la clase base
class Gerente extends Empleado {
  constructor(nombre, edad, puesto, departamento) {
    super(nombre, edad, puesto);  // Llamando al constructor de Empleado
    this.departamento = departamento;
  }

  gestionar() {
    console.log(`${this.nombre} gestiona el departamento de ${this.departamento}.`);
  }

  saludar() {
    super.saludar();  // Llamando al método `saludar` de la clase base (Empleado)
    console.log(`Soy el gerente del departamento de ${this.departamento}.`);
  }
}

// Instanciando un objeto de la clase Gerente
const pedro = new Gerente('Pedro', 40, 'Gerente', 'Tecnología');
pedro.saludar();
// "Hola, soy Pedro y tengo 40 años."
// "Soy el gerente del departamento de Tecnología."
pedro.gestionar(); // "Pedro gestiona el departamento de Tecnología."

// ------------------ 4. Métodos estáticos ------------------

// Los métodos estáticos pertenecen a la clase en sí, no a las instancias de la clase.
class Matematica {
  static sumar(a, b) {
    return a + b;
  }
  static restar(a, b) {
    return a - b;
  }
}

// Usando los métodos estáticos sin crear una instancia
console.log(Matematica.sumar(5, 3));  // 8
console.log(Matematica.restar(10, 7)); // 3
