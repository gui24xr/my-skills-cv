/*
  Concepto 09: Creación y manipulación de objetos
  Descripción:
  Creación y manipulación de objetos, así como el acceso a sus propiedades.
*/

// ------------------ 1. Creación de un objeto ------------------

// Creación de un objeto usando la notación de llaves {}
const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Desarrollador",
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  }
};

// Accediendo a las propiedades del objeto
console.log(persona.nombre);  // "Juan"
console.log(persona['edad']); // 30

// Llamando al método del objeto
persona.saludar();  // "Hola, mi nombre es Juan y soy Desarrollador"

// ------------------ 2. Creación de un objeto vacío ------------------

// Creando un objeto vacío y agregando propiedades
const auto = {};
auto.marca = "Toyota";
auto.modelo = "Corolla";
auto.anio = 2020;

console.log(auto.marca); // "Toyota"
console.log(auto['modelo']); // "Corolla"

// ------------------ 3. Accediendo a las propiedades usando `this` ------------------

const libro = {
  titulo: "JavaScript para todos",
  autor: "Autor Desconocido",
  descripcion: function() {
    console.log(`${this.titulo} fue escrito por ${this.autor}`);
  }
};

libro.descripcion(); // "JavaScript para todos fue escrito por Autor Desconocido"

// ------------------ 4. Modificar propiedades de un objeto ------------------

// Modificando propiedades del objeto
persona.edad = 35;
console.log(persona.edad); // 35

// Añadiendo nuevas propiedades
persona.direccion = "Calle Ficticia 123";
console.log(persona.direccion); // "Calle Ficticia 123"

// ------------------ 5. Eliminar propiedades de un objeto ------------------

// Eliminando una propiedad de un objeto
delete persona.direccion;
console.log(persona.direccion); // undefined

// ------------------ 6. Iterando sobre las propiedades de un objeto ------------------

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
// Esto imprimirá:
// nombre: Juan
// edad: 35
// profesion: Desarrollador
