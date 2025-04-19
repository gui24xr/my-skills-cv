/*
{
  "id": 1202,
  "title": "Immutability",
  "description": "Principio de no modificar directamente los datos existentes, sino crear nuevas estructuras de datos."
}
*/

// Datos originales (no se deben mutar directamente)
const usuario = {
  nombre: "Lucía",
  edad: 30
};

// Inmutabilidad: se crea un nuevo objeto en lugar de modificar el existente
const usuarioActualizado = {
  ...usuario,
  edad: 31
};

// Datos originales (array)
const numeros = [1, 2, 3];

// Inmutabilidad: se genera un nuevo array, el original no cambia
const numerosAgregados = [...numeros, 4];

// Inmutabilidad en funciones: no modificar argumentos
function agregarItem(lista, item) {
  return [...lista, item];
}

// Verificación de que los originales se mantienen sin cambios
console.log(usuario);             // { nombre: 'Lucía', edad: 30 }
console.log(usuarioActualizado); // { nombre: 'Lucía', edad: 31 }

console.log(numeros);            // [1, 2, 3]
console.log(numerosAgregados);   // [1, 2, 3, 4]

console.log(agregarItem([10, 20], 30)); // [10, 20, 30]
