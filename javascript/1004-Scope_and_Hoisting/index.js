/*
{
  "id": 1004,
  "title": "Scope and Hoisting",
  "description": "Cómo funcionan los ámbitos léxicos y el comportamiento de elevación de variables en JavaScript."
}
*/

/*
  Concepto 04: Ámbitos léxicos y hoisting
  Descripción:
  Cómo funcionan los ámbitos léxicos (lexical scope) y el comportamiento de elevación (hoisting) de variables en JavaScript.
*/

// ------------------ ÁMBITO LÉXICO (Lexical Scope) ------------------

function exterior() {
  const mensaje = "Hola desde el exterior";

  function interior() {
    console.log(mensaje); //  Puede acceder a variables del entorno exterior (scope léxico)
  }

  interior();
}

exterior();

//  Pero desde afuera, no puedo acceder a `mensaje`
// console.log(mensaje);  ReferenceError

// Lexical scope significa que el alcance de una variable se determina por **dónde se declara**, no por dónde se llama.

// ------------------ SCOPE DE BLOQUE (con let y const) ------------------

{
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y, z); //  10 20 30
}

// console.log(x);  ReferenceError: x is not defined
// console.log(y); ReferenceError: y is not defined
console.log(z); //  30 — var **no** respeta el scope de bloque

// ------------------ HOISTING ------------------

// Las funciones declaradas son elevadas al tope del scope, así que funcionan aunque las llames antes:
saludo(); //  Hola!

function saludo() {
  console.log("Hola!");
}

// Las variables con `var` también se elevan, pero sin su valor:
console.log(a); //  undefined
var a = 5;

// Las variables con `let` y `const` son **elevadas pero no inicializadas**,
// por eso dan error si las usás antes de declararlas:

// console.log(b);  ReferenceError
let b = 10;

// console.log(c);  ReferenceError
const c = 20;

// ------------------ BONUS: Hoisting en funciones y expresiones ------------------

// Esto funciona:
console.log(sumar(2, 3)); //  5
function sumar(x, y) {
  return x + y;
}

// Esto NO funciona:
// console.log(restar(5, 2)); TypeError: restar is not a function
const restar = function (x, y) {
  return x - y;
};
