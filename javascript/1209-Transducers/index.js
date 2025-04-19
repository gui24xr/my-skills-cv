/*
{
  "id": 1209,
  "title": "Transducers",
  "description": "Funciones que transforman otras funciones de transformación, permitiendo operaciones eficientes sobre estructuras de datos."
}
*/

/*
Transducers: funciones que transforman otras funciones de transformación (como map, filter),
permitiendo componerlas sin crear estructuras intermedias. Son independientes del tipo de colección,
y permiten aplicar múltiples pasos de transformación en una sola pasada eficiente.
*/

// Transducer genérico: recibe una función transformadora y devuelve un reducer
function mapT(fn) {
  return reducer => (acc, val) => reducer(acc, fn(val));
}

function filterT(predicate) {
  return reducer => (acc, val) =>
    predicate(val) ? reducer(acc, val) : acc;
}

// Función para aplicar un transducer a una colección
function transduce(transducer, reducer, inicial, coleccion) {
  const pasoReducido = transducer(reducer);
  return coleccion.reduce(pasoReducido, inicial);
}

// Ejemplo 1: map + filter combinados en un solo paso
const duplicar = x => x * 2;
const esPar = x => x % 2 === 0;

const trans = composeT(
  filterT(esPar),
  mapT(duplicar)
);

function composeT(...fns) {
  return fns.reduce((a, b) => x => a(b(x)));
}

const numeros = [1, 2, 3, 4, 5];

const resultado = transduce(trans, (acc, val) => [...acc, val], [], numeros);
console.log(resultado); // [4, 8]

/*
Ejemplo 2: contar cuántos valores cumplen una condición sin crear arrays intermedios
*/
const contarImpares = transduce(
  filterT(x => x % 2 !== 0),
  (acc, _) => acc + 1,
  0,
  numeros
);
console.log(contarImpares); // 3

/*
Casos de uso:
- Procesamiento eficiente de grandes volúmenes de datos sin estructuras intermedias.
- Pipelines de transformación optimizados (sin map/filter encadenados).
- Manipulación funcional avanzada en motores como Redux, RxJS o streams.
*/
