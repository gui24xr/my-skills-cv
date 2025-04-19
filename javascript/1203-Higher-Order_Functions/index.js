/*
{
  "id": 1203,
  "title": "Higher-Order Functions",
  "description": "Funciones que aceptan otras funciones como argumentos o las retornan como resultados."
}
*/

// Función de orden superior: recibe otra función como argumento
function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

// Funciones que se pueden pasar como argumento
function sumar(x, y) {
  return x + y;
}

function multiplicar(x, y) {
  return x * y;
}

// Uso: pasar funciones como parámetros
console.log(aplicarOperacion(3, 4, sumar));       // 7
console.log(aplicarOperacion(3, 4, multiplicar)); // 12

// Función de orden superior: retorna una nueva función
function crearSaludo(saludoInicial) {
  return function (nombre) {
    return `${saludoInicial}, ${nombre}`;
  };
}

const saludarHola = crearSaludo("Hola");
const saludarChau = crearSaludo("Chau");

console.log(saludarHola("Lucía")); // Hola, Lucía
console.log(saludarChau("Luis"));  // Chau, Luis
