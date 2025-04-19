/*
{
  "id": 1307,
  "title": "Search Algorithms",
  "description": "Algoritmos para buscar elementos en estructuras de datos, incluyendo búsqueda lineal y binaria."
}
*/

/*
  Concepto: Search Algorithms
  Descripción: Los algoritmos de búsqueda son fundamentales para encontrar elementos en estructuras de datos.
  La elección del algoritmo depende de si los datos están ordenados y del tamaño de la estructura.
*/

// ------------------ IMPLEMENTACIÓN DE ALGORITMOS DE BÚSQUEDA ------------------

// 1. Búsqueda Lineal (Linear Search)
function busquedaLineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // Retorna el índice si encuentra el valor
    }
  }
  return -1; // Retorna -1 si no encuentra el valor
}

// 2. Búsqueda Binaria (Binary Search)
function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === valor) {
      return medio;
    } else if (arr[medio] < valor) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

// 3. Búsqueda por Interpolación (Interpolation Search)
function busquedaInterpolacion(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin && valor >= arr[inicio] && valor <= arr[fin]) {
    // Fórmula de interpolación
    const pos = inicio + Math.floor(
      ((fin - inicio) / (arr[fin] - arr[inicio])) * (valor - arr[inicio])
    );

    if (arr[pos] === valor) {
      return pos;
    }

    if (arr[pos] < valor) {
      inicio = pos + 1;
    } else {
      fin = pos - 1;
    }
  }

  return -1;
}

// ------------------ EJEMPLOS DE USO ------------------

// Array desordenado para búsqueda lineal
const arrayDesordenado = [4, 2, 7, 1, 9, 3, 6, 8, 5];
console.log("Array desordenado:", arrayDesordenado);

// Búsqueda lineal
console.log("Búsqueda lineal de 7:", busquedaLineal(arrayDesordenado, 7)); // 2
console.log("Búsqueda lineal de 10:", busquedaLineal(arrayDesordenado, 10)); // -1

// Array ordenado para búsqueda binaria e interpolación
const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("\nArray ordenado:", arrayOrdenado);

// Búsqueda binaria
console.log("Búsqueda binaria de 7:", busquedaBinaria(arrayOrdenado, 7)); // 6
console.log("Búsqueda binaria de 10:", busquedaBinaria(arrayOrdenado, 10)); // -1

// Búsqueda por interpolación
console.log("Búsqueda por interpolación de 7:", busquedaInterpolacion(arrayOrdenado, 7)); // 6
console.log("Búsqueda por interpolación de 10:", busquedaInterpolacion(arrayOrdenado, 10)); // -1

// ------------------ COMPARACIÓN DE RENDIMIENTO ------------------

// Función para medir el tiempo de ejecución
function medirTiempo(func, arr, valor) {
  const inicio = performance.now();
  func(arr, valor);
  const fin = performance.now();
  return fin - inicio;
}

// Array grande para comparación
const arrayGrande = Array.from({length: 1000000}, (_, i) => i + 1);
const valorBuscado = 999999;

console.log("\nComparación de rendimiento con array de 1,000,000 elementos:");
console.log("Búsqueda lineal:", medirTiempo(busquedaLineal, arrayGrande, valorBuscado), "ms");
console.log("Búsqueda binaria:", medirTiempo(busquedaBinaria, arrayGrande, valorBuscado), "ms");
console.log("Búsqueda por interpolación:", medirTiempo(busquedaInterpolacion, arrayGrande, valorBuscado), "ms");
