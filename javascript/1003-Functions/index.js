/*
{
  "id": 1003,
  "title": "Functions",
  "description": "Declaración y uso de funciones en JavaScript, incluyendo funciones anónimas y de flecha."
}
*/

// ------------------ FUNCIONES DECLARADAS ------------------

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ariel")); //  Hola, Ariel!

// Las funciones declaradas se pueden usar antes de ser definidas (hoisting)
console.log(suma(2, 3)); //  5

function suma(a, b) {
  return a + b;
}

// ------------------ FUNCIONES ANÓNIMAS ------------------

const restar = function (a, b) {
  return a - b;
};

console.log(restar(10, 4)); //  6

// Las funciones anónimas no tienen nombre propio, se asignan a una variable

// ------------------ FUNCIONES DE FLECHA (ARROW FUNCTIONS) ------------------

const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(3, 4)); //  12

// Versión más compacta (cuando es una sola línea)
const cuadrado = x => x * x;

console.log(cuadrado(5)); //  25

// ------------------ FUNCIONES COMO PARÁMETROS ------------------

function operar(a, b, operacion) {
  return operacion(a, b);
}

const division = (x, y) => x / y;

console.log(operar(20, 4, division)); //  5
console.log(operar(7, 3, (x, y) => x % y)); //  1 (función flecha directamente en el argumento)

// ------------------ BONUS: Función dentro de función ------------------

function crearSaludo(saludo) {
  return function (nombre) {
    return `${saludo}, ${nombre}!`;
  };
}

const saludarConHola = crearSaludo("Hola");
console.log(saludarConHola("Lucía")); //  Hola, Lucía!