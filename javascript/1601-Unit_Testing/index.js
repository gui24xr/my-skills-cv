/*
{
  "id": 1601,
  "title": "Unit Testing",
  "description": "Pruebas unitarias que verifican el comportamiento de componentes individuales del código."
}
*/

/*
  Concepto: Unit Testing
  Descripción: Las pruebas unitarias son pruebas que verifican el comportamiento
  de componentes individuales del código, como funciones o clases, de forma aislada.
  Ayudan a garantizar que cada parte del código funcione correctamente y facilita
  la detección temprana de errores.
*/

// ------------------ EJEMPLOS DE PRUEBAS UNITARIAS ------------------

// 1. Función simple con pruebas unitarias
function sumar(a, b) {
  return a + b;
}

// Pruebas unitarias para la función sumar
function testSumar() {
  // Caso 1: Números positivos
  const resultado1 = sumar(2, 3);
  console.assert(resultado1 === 5, 'La suma de 2 y 3 debería ser 5');

  // Caso 2: Números negativos
  const resultado2 = sumar(-1, -1);
  console.assert(resultado2 === -2, 'La suma de -1 y -1 debería ser -2');

  // Caso 3: Cero
  const resultado3 = sumar(0, 5);
  console.assert(resultado3 === 5, 'La suma de 0 y 5 debería ser 5');
}

// 2. Clase con pruebas unitarias
class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  }
}

// Pruebas unitarias para la clase Calculadora
function testCalculadora() {
  const calculadora = new Calculadora();

  // Pruebas de suma
  console.assert(calculadora.sumar(2, 3) === 5, '2 + 3 = 5');
  console.assert(calculadora.sumar(-1, 1) === 0, '-1 + 1 = 0');

  // Pruebas de resta
  console.assert(calculadora.restar(5, 3) === 2, '5 - 3 = 2');
  console.assert(calculadora.restar(1, 1) === 0, '1 - 1 = 0');

  // Pruebas de multiplicación
  console.assert(calculadora.multiplicar(2, 3) === 6, '2 * 3 = 6');
  console.assert(calculadora.multiplicar(-2, 3) === -6, '-2 * 3 = -6');

  // Pruebas de división
  console.assert(calculadora.dividir(6, 2) === 3, '6 / 2 = 3');
  console.assert(calculadora.dividir(5, 2) === 2.5, '5 / 2 = 2.5');

  // Prueba de error en división por cero
  try {
    calculadora.dividir(1, 0);
    console.assert(false, 'Debería lanzar error al dividir por cero');
  } catch (error) {
    console.assert(error.message === 'No se puede dividir por cero', 'Mensaje de error correcto');
  }
}

// 3. Función con manejo de errores y pruebas
function validarEdad(edad) {
  if (typeof edad !== 'number') {
    throw new Error('La edad debe ser un número');
  }
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa');
  }
  if (edad > 120) {
    throw new Error('La edad no puede ser mayor a 120');
  }
  return true;
}

// Pruebas unitarias para la función validarEdad
function testValidarEdad() {
  // Caso válido
  console.assert(validarEdad(25) === true, 'Edad válida');

  // Casos de error
  try {
    validarEdad('25');
    console.assert(false, 'Debería lanzar error con string');
  } catch (error) {
    console.assert(error.message === 'La edad debe ser un número', 'Error de tipo correcto');
  }

  try {
    validarEdad(-1);
    console.assert(false, 'Debería lanzar error con edad negativa');
  } catch (error) {
    console.assert(error.message === 'La edad no puede ser negativa', 'Error de edad negativa correcto');
  }

  try {
    validarEdad(121);
    console.assert(false, 'Debería lanzar error con edad mayor a 120');
  } catch (error) {
    console.assert(error.message === 'La edad no puede ser mayor a 120', 'Error de edad máxima correcto');
  }
}

// 4. Clase con dependencias y pruebas
class ServicioUsuario {
  constructor(repository) {
    this.repository = repository;
  }

  async crearUsuario(usuario) {
    if (!usuario.nombre || !usuario.email) {
      throw new Error('Nombre y email son requeridos');
    }
    return await this.repository.guardar(usuario);
  }

  async obtenerUsuario(email) {
    return await this.repository.obtenerPorEmail(email);
  }
}

// Mock del repositorio para pruebas
class MockRepository {
  constructor() {
    this.usuarios = [];
  }

  async guardar(usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }

  async obtenerPorEmail(email) {
    return this.usuarios.find(u => u.email === email);
  }
}

// Pruebas unitarias para ServicioUsuario
async function testServicioUsuario() {
  const mockRepository = new MockRepository();
  const servicio = new ServicioUsuario(mockRepository);

  // Prueba de creación exitosa
  const usuario = { nombre: 'Juan', email: 'juan@ejemplo.com' };
  const resultado = await servicio.crearUsuario(usuario);
  console.assert(resultado.nombre === 'Juan', 'Usuario creado correctamente');

  // Prueba de obtención
  const usuarioObtenido = await servicio.obtenerUsuario('juan@ejemplo.com');
  console.assert(usuarioObtenido.email === 'juan@ejemplo.com', 'Usuario obtenido correctamente');

  // Prueba de error en creación
  try {
    await servicio.crearUsuario({});
    console.assert(false, 'Debería lanzar error con datos incompletos');
  } catch (error) {
    console.assert(error.message === 'Nombre y email son requeridos', 'Error de validación correcto');
  }
}

// 5. Ejecución de todas las pruebas
function ejecutarPruebas() {
  console.log('Iniciando pruebas unitarias...');
  
  testSumar();
  testCalculadora();
  testValidarEdad();
  testServicioUsuario().then(() => {
    console.log('Todas las pruebas completadas');
  }).catch(error => {
    console.error('Error en las pruebas:', error);
  });
}

// Ejecutar pruebas
ejecutarPruebas();
