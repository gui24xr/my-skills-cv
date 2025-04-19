/*
{
  "id": 1308,
  "title": "Abstract Data Types",
  "description": "Tipos de datos abstractos como pilas, colas y árboles, implementados en JavaScript."
}
*/

/*
  Concepto: Abstract Data Types
  Descripción: Los tipos de datos abstractos (ADT) son modelos matemáticos para tipos de datos
  donde se define su comportamiento desde el punto de vista del usuario, en términos de valores
  posibles y operaciones permitidas, sin especificar su implementación.
*/

// ------------------ IMPLEMENTACIÓN DE TIPOS DE DATOS ABSTRACTOS ------------------

// 1. Pila (Stack)
class Pila {
  constructor() {
    this.items = [];
  }

  // Agregar elemento a la pila
  push(elemento) {
    this.items.push(elemento);
  }

  // Eliminar y retornar el elemento superior
  pop() {
    if (this.estaVacia()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  // Ver el elemento superior sin eliminarlo
  peek() {
    if (this.estaVacia()) {
      return "La pila está vacía";
    }
    return this.items[this.items.length - 1];
  }

  // Verificar si la pila está vacía
  estaVacia() {
    return this.items.length === 0;
  }

  // Obtener el tamaño de la pila
  tamaño() {
    return this.items.length;
  }
}

// 2. Cola (Queue)
class Cola {
  constructor() {
    this.items = [];
  }

  // Agregar elemento a la cola
  enqueue(elemento) {
    this.items.push(elemento);
  }

  // Eliminar y retornar el primer elemento
  dequeue() {
    if (this.estaVacia()) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  // Ver el primer elemento sin eliminarlo
  front() {
    if (this.estaVacia()) {
      return "La cola está vacía";
    }
    return this.items[0];
  }

  // Verificar si la cola está vacía
  estaVacia() {
    return this.items.length === 0;
  }

  // Obtener el tamaño de la cola
  tamaño() {
    return this.items.length;
  }
}

// 3. Árbol Binario (Binary Tree)
class NodoArbol {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  // Insertar un valor en el árbol
  insertar(valor) {
    const nuevoNodo = new NodoArbol(valor);

    if (this.raiz === null) {
      this.raiz = nuevoNodo;
    } else {
      this.insertarNodo(this.raiz, nuevoNodo);
    }
  }

  insertarNodo(nodo, nuevoNodo) {
    if (nuevoNodo.valor < nodo.valor) {
      if (nodo.izquierda === null) {
        nodo.izquierda = nuevoNodo;
      } else {
        this.insertarNodo(nodo.izquierda, nuevoNodo);
      }
    } else {
      if (nodo.derecha === null) {
        nodo.derecha = nuevoNodo;
      } else {
        this.insertarNodo(nodo.derecha, nuevoNodo);
      }
    }
  }

  // Recorrido en orden (in-order)
  inOrder(nodo = this.raiz) {
    if (nodo !== null) {
      this.inOrder(nodo.izquierda);
      console.log(nodo.valor);
      this.inOrder(nodo.derecha);
    }
  }
}

// ------------------ EJEMPLOS DE USO ------------------

// Ejemplo de Pila
console.log("Ejemplo de Pila:");
const pila = new Pila();
pila.push(1);
pila.push(2);
pila.push(3);
console.log("Elemento superior:", pila.peek()); // 3
console.log("Eliminado:", pila.pop()); // 3
console.log("Nuevo elemento superior:", pila.peek()); // 2

// Ejemplo de Cola
console.log("\nEjemplo de Cola:");
const cola = new Cola();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
console.log("Primer elemento:", cola.front()); // 1
console.log("Eliminado:", cola.dequeue()); // 1
console.log("Nuevo primer elemento:", cola.front()); // 2

// Ejemplo de Árbol Binario
console.log("\nEjemplo de Árbol Binario:");
const arbol = new ArbolBinario();
arbol.insertar(10);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(3);
arbol.insertar(7);
console.log("Recorrido en orden:");
arbol.inOrder(); // 3, 5, 7, 10, 15
