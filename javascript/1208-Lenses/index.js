/*
Lenses: herramientas para acceder y modificar estructuras de datos inmutables de forma segura.
Un lens es un par de funciones: un getter y un setter. Permiten trabajar sobre propiedades
de objetos sin mutar su estructura original. Son útiles para operaciones composables y predecibles
sobre datos anidados o complejos.
*/

// Crea un lens para una propiedad específica
function lens(prop) {
  return {
    get: obj => obj[prop],
    set: (val, obj) => ({ ...obj, [prop]: val })
  };
}

// Utilidades funcionales para operar con lenses
function view(lens, obj) {
  return lens.get(obj);
}

function set(lens, val, obj) {
  return lens.set(val, obj);
}

function over(lens, fn, obj) {
  return lens.set(fn(lens.get(obj)), obj);
}

// Objeto base de ejemplo
const usuario = {
  nombre: "Lucía",
  edad: 30
};

// Lens para acceder/modificar la propiedad 'edad'
const edadLens = lens("edad");

/*
Ejemplo 1: acceder al valor usando view
*/
console.log(view(edadLens, usuario)); // 30

/*
Ejemplo 2: actualizar de forma inmutable usando set y over
*/
const usuarioActualizado = set(edadLens, 31, usuario);
console.log(usuarioActualizado); // { nombre: 'Lucía', edad: 31 }

const usuarioIncrementado = over(edadLens, x => x + 1, usuario);
console.log(usuarioIncrementado); // { nombre: 'Lucía', edad: 31 }

/*
Casos de uso:
- Manipulación inmutable de estructuras de datos (especialmente anidadas).
- Edición de estados en interfaces de usuario sin mutación directa.
- Composición funcional con librerías como Ramda, Fluture, etc.
*/
