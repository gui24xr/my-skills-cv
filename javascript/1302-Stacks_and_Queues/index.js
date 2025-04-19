/*
{
  "id": 1302,
  "title": "Stacks and Queues",
  "description": "Estructuras de datos lineales que permiten operaciones de inserción y eliminación en un orden específico (LIFO y FIFO)."
}
*/

/*
Stacks y Queues: estructuras de datos lineales con reglas de acceso específicas.

- Stack (pila): LIFO (Last In, First Out). El último elemento en entrar es el primero en salir.
- Queue (cola): FIFO (First In, First Out). El primer elemento en entrar es el primero en salir.

Se pueden implementar fácilmente con arrays en JavaScript.
*/

// Stack: implementación básica usando push y pop
const pila = [];

// Ejemplo 1: agregar elementos al stack
pila.push(1);
pila.push(2);
pila.push(3);

// Ejemplo 2: remover elementos (último entra, primero sale)
console.log(pila.pop()); // 3
console.log(pila.pop()); // 2

// Queue: implementación básica usando push y shift
const cola = [];

// Ejemplo 1: agregar elementos a la cola
cola.push("A");
cola.push("B");
cola.push("C");

// Ejemplo 2: remover elementos (primero entra, primero sale)
console.log(cola.shift()); // A
console.log(cola.shift()); // B

/*
Casos de uso:
- Stack: navegación hacia atrás (historial), deshacer acciones, evaluación de expresiones.
- Queue: sistemas de turnos, procesamiento de tareas en orden, manejo de eventos.
*/
