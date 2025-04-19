/*
{
  "id": 1006,
  "title": "This Context",
  "description": "Cómo funciona el contexto de ejecución y cómo cambiarlo en JavaScript."
}
*/

/ ------------------ 1. El contexto de `this` ------------------

function saludo() {
  console.log(this); // 'this' hace referencia al objeto que está llamando la función
}

const persona = {
  nombre: "Juan",
  saludo: saludo
};

persona.saludo();  // 'this' hace referencia a `persona`, así que imprime el objeto `persona`

const saludoGlobal = saludo;
saludoGlobal();  // 'this' hace referencia al objeto global en un entorno no estricto (en navegador será `window`)

// ------------------ 2. Uso de `this` en un objeto con métodos ------------------

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  mostrarInfo: function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
};

coche.mostrarInfo();  // 'this' hace referencia al objeto `coche`

// ------------------ 3. El contexto de `this` dentro de funciones constructoras ------------------

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  // 'this' hace referencia al objeto recién creado
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const persona1 = new Persona("Carlos", 25);
persona1.saludar();  // 'this' hace referencia a la instancia de `Persona` creada (persona1)

// ------------------ 4. El contexto de `this` en funciones flecha ------------------

const objeto = {
  nombre: "Objeto",
  metodoNormal: function() {
    console.log(this);  // 'this' hace referencia al objeto que llama la función
  },
  metodoFlecha: () => {
    console.log(this);  // 'this' hace referencia al contexto de ejecución en el momento de la creación de la función
  }
};

objeto.metodoNormal();  // 'this' hace referencia al objeto `objeto`
objeto.metodoFlecha();  // 'this' NO hace referencia a `objeto`, sino al contexto global (o `undefined` en modo estricto)

// ------------------ 5. Usando `call`, `apply` y `bind` para cambiar el contexto de `this` ------------------

const persona2 = {
  nombre: "Ana",
  saludar: function(mensaje) {
    console.log(`${mensaje}, soy ${this.nombre}`);
  }
};

const persona3 = {
  nombre: "Pedro"
};

// Usando `call` para cambiar el contexto de `this`
persona2.saludar.call(persona3, "Hola");  // "Hola, soy Pedro"

// Usando `apply` (es similar a `call`, pero pasa los argumentos como un array)
persona2.saludar.apply(persona3, ["Hola"]);  // "Hola, soy Pedro"

// Usando `bind` para crear una nueva función con un `this` específico
const saludarPersona3 = persona2.saludar.bind(persona3);
saludarPersona3("¡Hola!");  // "¡Hola!, soy Pedro"