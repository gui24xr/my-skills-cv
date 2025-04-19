// ---------------------------------------------
// Encapsulación, Herencia y Polimorfismo en JavaScript
// Demostración práctica orientada a reclutadores
// ---------------------------------------------

// 🛡️ Encapsulación
// Ocultamos detalles internos de la clase usando campos privados (#)

class Persona {
  #nombre; // Propiedad privada

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setNombre(nuevoNombre) {
    if (typeof nuevoNombre === 'string' && nuevoNombre.trim().length > 0) {
      this.#nombre = nuevoNombre;
    } else {
      throw new Error('Nombre inválido');
    }
  }
}

// 🧬 Herencia
// Creamos una jerarquía de clases que reutiliza y extiende comportamiento

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un sonido genérico.`);
  }
}

class Perro extends Animal {
  hablar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

class Gato extends Animal {
  hablar() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

// 🧠 Polimorfismo
// Las subclases redefinen el comportamiento de "hablar" de forma única

const animales = [
  new Perro("Rocky"),
  new Gato("Luna"),
  new Animal("Criatura desconocida")
];

console.log("=== Demostración de Polimorfismo ===");
animales.forEach(animal => {
  animal.hablar(); // Ejecuta la versión correspondiente al tipo de objeto
});

// === Encapsulación en acción ===
console.log("\n=== Demostración de Encapsulación ===");
const persona = new Persona("Lucía");
console.log("Nombre original:", persona.getNombre());

persona.setNombre("Camila");
console.log("Nombre actualizado:", persona.getNombre());

try {
  persona.setNombre(""); // Generará un error
} catch (error) {
  console.error("Error al actualizar nombre:", error.message);
}
