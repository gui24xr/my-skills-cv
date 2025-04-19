/*
{
  "id": 1305,
  "title": "Array Operations (map, filter, reduce)",
  "description": "Métodos funcionales para manipular arrays de manera declarativa y eficiente."
}
*/

/*
  Concepto: Array Operations
  Descripción: JavaScript proporciona métodos funcionales poderosos para manipular arrays:
  - map: Transforma cada elemento del array
  - filter: Filtra elementos basado en una condición
  - reduce: Reduce el array a un único valor
  Estos métodos permiten escribir código más declarativo y mantenible.
*/

// ------------------ EJEMPLOS DE OPERACIONES CON ARRAYS ------------------

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. map: Transformar elementos
const cuadrados = numeros.map(num => num * num);
console.log("Cuadrados:", cuadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// 2. filter: Filtrar elementos
const pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares); // [2, 4, 6, 8, 10]

// 3. reduce: Reducir a un valor
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Suma total:", suma); // 55

// 4. Combinación de métodos
const resultado = numeros
  .filter(num => num % 2 === 0) // Filtra pares
  .map(num => num * 2)          // Multiplica por 2
  .reduce((acc, num) => acc + num, 0); // Suma todo

console.log("Resultado combinado:", resultado); // 60

// 5. Ejemplo práctico: Promedio de números mayores que 5
const promedio = numeros
  .filter(num => num > 5)
  .reduce((acc, num, index, array) => {
    acc += num;
    if (index === array.length - 1) {
      return acc / array.length;
    }
    return acc;
  }, 0);

console.log("Promedio de números > 5:", promedio); // 8

// 6. Ejemplo con objetos
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Ana", edad: 35 }
];

// Obtener nombres de personas mayores de 25
const nombresMayores = personas
  .filter(persona => persona.edad > 25)
  .map(persona => persona.nombre);

console.log("Nombres de personas mayores de 25:", nombresMayores); // ["María", "Ana"]
