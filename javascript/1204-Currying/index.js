/*
{
  "id": 1204,
  "title": "Currying",
  "description": "Transformación de una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento."
}
*/

// Currying: transformación de una función que toma múltiples argumentos
// en una secuencia de funciones que toman un solo argumento cada una.
// Útil para crear funciones reusables y configurables por etapas.

// Ejemplo base: función sin currying
function sumar(a, b, c) {
  return a + b + c;
}
console.log(sumar(1, 2, 3)); // 6

// Versión curryficada
function curriedSum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedSum(1)(2)(3)); // 6

// Ejemplo 1: creación de funciones parciales para reutilizar
const sumarDesde10 = curriedSum(10);
const sumar10y5 = sumarDesde10(5);
console.log(sumar10y5(2)); // 17

// Ejemplo 2: currying aplicado a validación
function esLongitudValida(min) {
  return function(texto) {
    return texto.length >= min;
  };
}

const minimo5Caracteres = esLongitudValida(5);
console.log(minimo5Caracteres("hola"));     // false
console.log(minimo5Caracteres("javascript")); // true

// Situaciones comunes de uso:
// - Reutilización parcial de funciones con configuración previa.
// - Construcción de funciones personalizadas en validadores, filtros, etc.
// - Composición funcional en librerías como Ramda o Lodash.
// - En React, para generar handlers personalizados con parámetros.
