/*
{
  "id": 1303,
  "title": "Linked Lists",
  "description": "Estructura de datos donde cada elemento apunta al siguiente, permitiendo inserciones y eliminaciones eficientes."
}
*/

/*
  Concepto: Linked Lists
  Descripción: Una lista enlazada es una estructura de datos lineal donde cada elemento (nodo) contiene
  un valor y una referencia al siguiente nodo. Esto permite operaciones eficientes de inserción y eliminación
  en cualquier posición de la lista.
*/

// ------------------ IMPLEMENTACIÓN DE UNA LISTA ENLAZADA ------------------

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
  constructor() {
    this.cabeza = null;
    this.tamaño = 0;
  }

  // Agregar un elemento al final de la lista
  agregar(valor) {
    const nuevoNodo = new Nodo(valor);
    
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
    
    this.tamaño++;
  }

  // Eliminar un elemento por su valor
  eliminar(valor) {
    if (!this.cabeza) return false;

    if (this.cabeza.valor === valor) {
      this.cabeza = this.cabeza.siguiente;
      this.tamaño--;
      return true;
    }

    let actual = this.cabeza;
    while (actual.siguiente) {
      if (actual.siguiente.valor === valor) {
        actual.siguiente = actual.siguiente.siguiente;
        this.tamaño--;
        return true;
      }
      actual = actual.siguiente;
    }

    return false;
  }

  // Buscar un elemento
  buscar(valor) {
    let actual = this.cabeza;
    while (actual) {
      if (actual.valor === valor) return true;
      actual = actual.siguiente;
    }
    return false;
  }

  // Obtener el tamaño de la lista
  obtenerTamaño() {
    return this.tamaño;
  }
}

// ------------------ EJEMPLO DE USO ------------------

// Crear una nueva lista enlazada
const lista = new ListaEnlazada();

// Agregar elementos
lista.agregar(1);
lista.agregar(2);
lista.agregar(3);

console.log("Tamaño de la lista:", lista.obtenerTamaño()); // 3
console.log("¿Existe el valor 2?:", lista.buscar(2)); // true

// Eliminar un elemento
lista.eliminar(2);
console.log("Tamaño después de eliminar:", lista.obtenerTamaño()); // 2
console.log("¿Existe el valor 2?:", lista.buscar(2)); // false
