/*
{
  "id": 1501,
  "title": "Elements of JavaScript Style",
  "description": "Principios y mejores prácticas para escribir código JavaScript limpio, legible y mantenible."
}
*/

/*
  Concepto: Elements of JavaScript Style
  Descripción: El estilo de código es crucial para la legibilidad y mantenibilidad.
  Aquí exploramos los elementos fundamentales que hacen que el código JavaScript
  sea elegante y efectivo.
*/

// ------------------ EJEMPLOS DE ESTILO DE CÓDIGO ------------------

// 1. Nombres significativos
// Mal
const x1 = 10;
const y1 = 20;
function f1(a, b) { return a + b; }

// Bien
const ancho = 10;
const alto = 20;
function calcularArea(ancho, alto) { return ancho * alto; }

// 2. Consistencia en el estilo
// Mal
const nombre1='Juan';
const apellido1 = 'Pérez';
const edad1= 25;

// Bien
const nombre2 = 'Juan';
const apellido2 = 'Pérez';
const edad2 = 25;

// 3. Funciones pequeñas y enfocadas
// Mal
function procesarUsuario(usuario) {
  // Muchas responsabilidades
  const nombre = usuario.nombre;
  const edad = usuario.edad;
  const email = usuario.email;
  // Validaciones
  if (nombre.length < 3) return false;
  if (edad < 18) return false;
  if (!email.includes('@')) return false;
  // Procesamiento
  const datos = {
    nombre: nombre.toUpperCase(),
    edad: edad + 1,
    email: email.toLowerCase()
  };
  // Guardar
  return datos;
}

// Bien
function validarNombre(nombre) {
  return nombre.length >= 3;
}

function validarEdad(edad) {
  return edad >= 18;
}

function validarEmail(email) {
  return email.includes('@');
}

function procesarDatosUsuario(usuario) {
  return {
    nombre: usuario.nombre.toUpperCase(),
    edad: usuario.edad + 1,
    email: usuario.email.toLowerCase()
  };
}

// 4. Comentarios útiles
// Mal
// Incrementa el contador
contador++;

// Bien
// Incrementa el contador de intentos fallidos para el bloqueo de cuenta
contadorIntentosFallidos++;

// 5. Manejo de errores claro
// Mal
try {
  // código
} catch (e) {
  console.log(e);
}

// Bien
try {
  // código
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Error de tipo:', error.message);
  } else if (error instanceof RangeError) {
    console.error('Error de rango:', error.message);
  } else {
    console.error('Error inesperado:', error.message);
  }
}

// 6. Uso de constantes para valores mágicos
// Mal
function calcularPrecio(cantidad) {
  return cantidad * 0.21 + cantidad;
}

// Bien
const IVA = 0.21;
function calcularPrecioConIVA(cantidad) {
  return cantidad * IVA + cantidad;
}

// 7. Funciones puras cuando sea posible
// Mal
let total = 0;
function agregarAlTotal(valor) {
  total += valor;
  return total;
}

// Bien
function calcularTotal(valores) {
  return valores.reduce((suma, valor) => suma + valor, 0);
}

// 8. Uso de métodos modernos de array
// Mal
const numeros1 = [1, 2, 3, 4, 5];
const pares1 = [];
for (let i = 0; i < numeros1.length; i++) {
  if (numeros1[i] % 2 === 0) {
    pares1.push(numeros1[i]);
  }
}

// Bien
const numeros2 = [1, 2, 3, 4, 5];
const pares2 = numeros2.filter(numero => numero % 2 === 0);

// 9. Desestructuración y operadores modernos
// Mal
const usuario1 = {
  nombre: 'Juan',
  edad: 25,
  email: 'juan@ejemplo.com'
};
const nombre3 = usuario1.nombre;
const edad3 = usuario1.edad;
const email1 = usuario1.email;

// Bien
const usuario2 = {
  nombre: 'Juan',
  edad: 25,
  email: 'juan@ejemplo.com'
};
const { nombre: nombre4, edad: edad4, email: email2 } = usuario2;

// 10. Uso de template strings
// Mal
const saludo1 = 'Hola ' + nombre4 + ', tienes ' + edad4 + ' años';

// Bien
const saludo2 = `Hola ${nombre4}, tienes ${edad4} años`;
