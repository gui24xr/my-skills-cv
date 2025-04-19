/*
{
  "id": 1306,
  "title": "Sorting Algorithms",
  "description": "Algoritmos para ordenar elementos en un array, incluyendo Bubble Sort, Quick Sort y Merge Sort."
}
*/

/*
  Concepto: Sorting Algorithms
  Descripción: Los algoritmos de ordenamiento son fundamentales en programación. Cada uno tiene
  diferentes características de rendimiento y casos de uso. Aquí implementamos algunos de los más comunes.
*/

// ------------------ IMPLEMENTACIÓN DE ALGORITMOS DE ORDENAMIENTO ------------------

// 1. Bubble Sort (Ordenamiento por burbuja)
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 2. Quick Sort (Ordenamiento rápido)
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];
  
  for (let num of arr) {
    if (num < pivot) left.push(num);
    else if (num > pivot) right.push(num);
    else equal.push(num);
  }
  
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// 3. Merge Sort (Ordenamiento por mezcla)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// ------------------ EJEMPLOS DE USO ------------------

const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];

console.log("Array original:", arrayDesordenado);

// Bubble Sort
const arrayBubble = [...arrayDesordenado];
console.log("Bubble Sort:", bubbleSort(arrayBubble));

// Quick Sort
const arrayQuick = [...arrayDesordenado];
console.log("Quick Sort:", quickSort(arrayQuick));

// Merge Sort
const arrayMerge = [...arrayDesordenado];
console.log("Merge Sort:", mergeSort(arrayMerge));

// ------------------ COMPARACIÓN DE RENDIMIENTO ------------------

// Función para medir el tiempo de ejecución
function medirTiempo(func, arr) {
  const inicio = performance.now();
  func([...arr]);
  const fin = performance.now();
  return fin - inicio;
}

const arrayGrande = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));

console.log("\nComparación de rendimiento con array de 10000 elementos:");
console.log("Bubble Sort:", medirTiempo(bubbleSort, arrayGrande), "ms");
console.log("Quick Sort:", medirTiempo(quickSort, arrayGrande), "ms");
console.log("Merge Sort:", medirTiempo(mergeSort, arrayGrande), "ms");
