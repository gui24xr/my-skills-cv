/*
{
  "id": 1206,
  "title": "Functors and Categories",
  "description": "Estructuras que permiten mapear funciones sobre valores envueltos o estructurados."
}
*/

// Functors and Categories: estructuras que permiten aplicar funciones
// sobre valores envueltos sin romper su estructura.
// Un functor es cualquier objeto que implemente el método `.map(fn)`
// y mantiene la identidad y composición funcional (categorías).

// Implementación de un Functor simple
function Caja(valor) {
  return {
    valor,
    map(fn) {
      return Caja(fn(valor)); // Devuelve una nueva Caja transformada
    },
    toString() {
      return `Caja(${valor})`;
    }
  };
}

// Ejemplo 1: transformación encadenada
const resultado1 = Caja(3)
  .map(x => x + 1)
  .map(x => x * 2);

console.log(resultado1.toString()); // Caja(8)

// Ejemplo 2: procesamiento de texto estructurado
const resultado2 = Caja("  JavaScript ")
  .map(s => s.trim())
  .map(s => s.toUpperCase());

console.log(resultado2.toString()); // Caja(JAVASCRIPT)

// Propiedad de identidad: Caja(x).map(id) ≡ Caja(x)
const identidad = x => x;
console.log(Caja(10).map(identidad).toString()); // Caja(10)

// Propiedad de composición: map(f ∘ g) ≡ map(g).map(f)
const f = x => x + 1;
const g = x => x * 2;

const directo = Caja(5).map(x => f(g(x)));
const compuesto = Caja(5).map(g).map(f);
console.log(directo.toString());   // Caja(11)
console.log(compuesto.toString()); // Caja(11)

// Casos de uso:
// - Librerías funcionales como Ramda, Folktale o Sanctuary.
// - Manipulación segura de valores (Maybe, Result).
// - Modelado de efectos en programación funcional pura (IO, Task, etc).
