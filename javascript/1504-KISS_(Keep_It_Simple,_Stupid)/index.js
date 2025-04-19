/*
{
  "id": 1504,
  "title": "KISS (Keep It Simple, Stupid)",
  "description": "Principio que promueve la simplicidad en el diseño y la implementación de software."
}
*/

/*
  Concepto: KISS (Keep It Simple, Stupid)
  Descripción: El principio KISS establece que la mayoría de los sistemas funcionan mejor
  si se mantienen simples en lugar de hacerlos complejos. La simplicidad debe ser un objetivo
  clave en el diseño y la implementación de software.
*/

// ------------------ EJEMPLOS DE PRINCIPIO KISS ------------------

// 1. Simplificación de condicionales
// Mal
function determinarEstacion(mes) {
  if (mes === 12 || mes === 1 || mes === 2) {
    return 'Invierno';
  } else if (mes === 3 || mes === 4 || mes === 5) {
    return 'Primavera';
  } else if (mes === 6 || mes === 7 || mes === 8) {
    return 'Verano';
  } else if (mes === 9 || mes === 10 || mes === 11) {
    return 'Otoño';
  } else {
    return 'Mes inválido';
  }
}

// Bien
function determinarEstacion(mes) {
  const estaciones = {
    invierno: [12, 1, 2],
    primavera: [3, 4, 5],
    verano: [6, 7, 8],
    otoño: [9, 10, 11]
  };

  for (const [estacion, meses] of Object.entries(estaciones)) {
    if (meses.includes(mes)) {
      return estacion;
    }
  }
  return 'Mes inválido';
}

// 2. Simplificación de validaciones
// Mal
function validarFormulario(datos) {
  if (datos.nombre === undefined || datos.nombre === null || datos.nombre === '') {
    return false;
  }
  if (datos.email === undefined || datos.email === null || datos.email === '') {
    return false;
  }
  if (datos.edad === undefined || datos.edad === null || datos.edad < 18) {
    return false;
  }
  return true;
}

// Bien
function validarFormulario(datos) {
  const camposRequeridos = ['nombre', 'email', 'edad'];
  return camposRequeridos.every(campo => {
    const valor = datos[campo];
    return valor !== undefined && valor !== null && valor !== '';
  }) && datos.edad >= 18;
}

// 3. Simplificación de cálculos
// Mal
function calcularPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

// Bien
function calcularPromedio(numeros) {
  return numeros.reduce((suma, num) => suma + num, 0) / numeros.length;
}

// 4. Simplificación de manejo de errores
// Mal
try {
  // código
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Error de tipo:', error.message);
  } else if (error instanceof RangeError) {
    console.error('Error de rango:', error.message);
  } else if (error instanceof ReferenceError) {
    console.error('Error de referencia:', error.message);
  } else {
    console.error('Error desconocido:', error.message);
  }
}

// Bien
try {
  // código
} catch (error) {
  console.error(`Error: ${error.message}`);
}

// 5. Simplificación de configuración
// Mal
class Configuracion {
  constructor() {
    this.apiUrl = 'https://api.ejemplo.com';
    this.apiVersion = 'v1';
    this.timeout = 5000;
    this.retryCount = 3;
    this.retryDelay = 1000;
    this.maxConnections = 10;
    this.cacheEnabled = true;
    this.cacheTimeout = 3600;
  }
}

// Bien
const configuracion = {
  api: {
    url: 'https://api.ejemplo.com',
    version: 'v1',
    timeout: 5000
  },
  retry: {
    count: 3,
    delay: 1000
  },
  conexiones: {
    max: 10
  },
  cache: {
    enabled: true,
    timeout: 3600
  }
};

// 6. Simplificación de manipulación de arrays
// Mal
function filtrarNumerosPares(numeros) {
  const pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
}

// Bien
function filtrarNumerosPares(numeros) {
  return numeros.filter(num => num % 2 === 0);
}

// 7. Simplificación de manipulación de objetos
// Mal
function actualizarUsuario(usuario, cambios) {
  const usuarioActualizado = {};
  for (const clave in usuario) {
    usuarioActualizado[clave] = usuario[clave];
  }
  for (const clave in cambios) {
    usuarioActualizado[clave] = cambios[clave];
  }
  return usuarioActualizado;
}

// Bien
function actualizarUsuario(usuario, cambios) {
  return { ...usuario, ...cambios };
}

// 8. Ejemplo de aplicación del principio KISS
class ServicioSimple {
  constructor(config) {
    this.config = config;
  }

  async obtenerDatos(url) {
    try {
      const respuesta = await fetch(url, {
        timeout: this.config.api.timeout
      });
      return await respuesta.json();
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
      return null;
    }
  }

  procesarDatos(datos) {
    if (!datos) return [];
    return datos
      .filter(item => item.activo)
      .map(item => ({
        id: item.id,
        nombre: item.nombre.toUpperCase(),
        fecha: new Date(item.fecha).toLocaleDateString()
      }));
  }
}

// Uso
const servicio = new ServicioSimple(configuracion);
const datos = await servicio.obtenerDatos(`${configuracion.api.url}/datos`);
const datosProcesados = servicio.procesarDatos(datos);
