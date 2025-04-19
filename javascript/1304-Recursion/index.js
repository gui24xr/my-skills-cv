/*
{
  "id": 1304,
  "title": "Recursion",
  "description": "Técnica de programación donde una función se llama a sí misma para resolver problemas de manera elegante."
}
*/

/*
  Concepto: Recursion
  Descripción: La recursión es un concepto fundamental en programación donde una función se llama a sí misma
  para resolver un problema. Es especialmente útil para problemas que pueden ser divididos en subproblemas
  más pequeños del mismo tipo.
*/

// ------------------ EJEMPLOS DE RECURSIÓN ------------------

// 1. Factorial
function factorial(n) {
  // Caso base
  if (n === 0 || n === 1) return 1;
  // Caso recursivo
  return n * factorial(n - 1);
}

console.log("Factorial de 5:", factorial(5)); // 120

// 2. Fibonacci
function fibonacci(n) {
  // Caso base
  if (n <= 1) return n;
  // Caso recursivo
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci de 6:", fibonacci(6)); // 8

// 3. Suma de elementos de un array
function sumarArray(arr, indice = 0) {
  // Caso base
  if (indice === arr.length) return 0;
  // Caso recursivo
  return arr[indice] + sumarArray(arr, indice + 1);
}

console.log("Suma de [1, 2, 3, 4]:", sumarArray([1, 2, 3, 4])); // 10

// 4. Búsqueda binaria recursiva
function busquedaBinaria(arr, valor, inicio = 0, fin = arr.length - 1) {
  // Caso base
  if (inicio > fin) return -1;
  
  const medio = Math.floor((inicio + fin) / 2);
  
  if (arr[medio] === valor) return medio;
  
  // Caso recursivo
  if (arr[medio] > valor) {
    return busquedaBinaria(arr, valor, inicio, medio - 1);
  } else {
    return busquedaBinaria(arr, valor, medio + 1, fin);
  }
}

const arrayOrdenado = [1, 3, 5, 7, 9];
console.log("Búsqueda binaria de 5:", busquedaBinaria(arrayOrdenado, 5)); // 2
