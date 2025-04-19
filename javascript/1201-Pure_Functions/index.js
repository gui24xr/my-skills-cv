/*
{
  "id": 1201,
  "title": "Pure Functions",
  "description": "Funciones que, dado un mismo conjunto de entradas, siempre devuelven la misma salida sin producir efectos secundarios."
}
*/

// Función pura: no depende de ni modifica ningún estado externo
// Siempre devuelve el mismo resultado para los mismos argumentos
function sumar(a, b) {
  return a + b;
}

// Función pura: transforma datos sin efectos secundarios
function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Función pura: filtra elementos según un criterio
function filtrarPares(numeros) {
  return numeros.filter(n => n % 2 === 0);
}

// Llamadas con entradas fijas que siempre devuelven la misma salida
console.log(sumar(2, 3));                 // 5
console.log(capitalizar("jAvAsCrIpT"));   // Javascript
console.log(filtrarPares([1, 2, 3, 4]));  // [2, 4]
