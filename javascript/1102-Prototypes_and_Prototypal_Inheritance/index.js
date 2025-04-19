/*
  Concepto 10: Prototypes and Prototypal Inheritance
  Descripción:
  Cómo funciona la herencia basada en prototipos en JavaScript.
*/

// ------------------ 1. Prototipos en JavaScript ------------------

// Cada objeto en JavaScript tiene un prototipo, que es otro objeto de donde puede heredar propiedades y métodos.

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Añadimos un método al prototipo de Persona
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};

const juan = new Persona('Juan', 30);
juan.saludar();  // "Hola, soy Juan y tengo 30 años."

// ------------------ 2. Herencia Prototípica ------------------

// Podemos crear objetos que heredan propiedades y métodos de otros objetos

function Empleado(nombre, edad, puesto) {
  // Llamar al constructor de Persona
  Persona.call(this, nombre, edad);
  this.puesto = puesto;
}

// Establecer el prototipo de Empleado para que herede de Persona
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

// Añadir un método específico para Empleado
Empleado.prototype.trabajar = function() {
  console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
};

const maria = new Empleado('María', 28, 'Desarrolladora');
maria.saludar();  // "Hola, soy María y tengo 28 años."
maria.trabajar();  // "María está trabajando como Desarrolladora."

// ------------------ 3. Acceder a las propiedades del prototipo ------------------

console.log(juan.hasOwnProperty('nombre'));  // true
console.log(juan.hasOwnProperty('saludar'));  // false (saludar está en el prototipo)

console.log(juan.__proto__);  // Muestra el prototipo del objeto
console.log(Empleado.prototype);  // Muestra el prototipo de Empleado

// ------------------ 4. Cambiar el prototipo de un objeto ------------------

// Se puede modificar el prototipo de un objeto después de su creación
const persona2 = new Persona('Carlos', 40);

persona2.__proto__.saludar = function() {
  console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
};

persona2.saludar();  // "¡Hola! Soy Carlos y tengo 40 años."
