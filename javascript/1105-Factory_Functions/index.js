/*
{
  "id": 1105,
  "title": "Factory Functions",
  "description": "Funciones que retornan nuevos objetos personalizados, permitiendo flexibilidad en la creación de instancias."
}
*/

function crearUsuario(nombre, rol) {
  return {
    nombre,
    rol,
    saludar() {
      console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}.`);
    }
  };
}

const usuario1 = crearUsuario("Ana", "Desarrolladora");
const usuario2 = crearUsuario("Luis", "Diseñador");

usuario1.saludar();
usuario2.saludar();

function crearAnimal(tipo, nombre) {
  const base = {
    nombre,
    tipo,
    describir() {
      console.log(`Soy un ${this.tipo} llamado ${this.nombre}.`);
    }
  };

  if (tipo === "perro") {
    return {
      ...base,
      hablar() {
        console.log("¡Guau!");
      }
    };
  }

  if (tipo === "gato") {
    return {
      ...base,
      hablar() {
        console.log("¡Miau!");
      }
    };
  }

  return base;
}

const perro = crearAnimal("perro", "Rocky");
const gato = crearAnimal("gato", "Luna");
const dragon = crearAnimal("dragón", "Draco");

[perro, gato, dragon].forEach(animal => {
  animal.describir();
  if (animal.hablar) animal.hablar();
});
