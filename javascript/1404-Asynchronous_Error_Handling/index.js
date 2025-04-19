/*
{
  "id": 1404,
  "title": "Asynchronous Error Handling",
  "description": "Técnicas para manejar errores en operaciones asíncronas usando try/catch, .catch() y manejo de errores globales."
}
*/

/*
  Concepto: Asynchronous Error Handling
  Descripción: El manejo de errores en operaciones asíncronas requiere técnicas específicas
  debido a la naturaleza no bloqueante de JavaScript. Aquí exploramos diferentes enfoques
  para manejar errores en código asíncrono.
*/

// ------------------ EJEMPLOS DE MANEJO DE ERRORES ASÍNCRONOS ------------------

// 1. Manejo de errores con Promises
function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject(new Error("Error en la operación"));
      }
    }, 1000);
  });
}

// Usando .catch()
operacionAsincrona()
  .then(resultado => console.log(resultado))
  .catch(error => console.error("Error capturado:", error.message));

// 2. Manejo de errores con async/await
async function manejoConAsyncAwait() {
  try {
    const resultado = await operacionAsincrona();
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error en async/await:", error.message);
  }
}

manejoConAsyncAwait();

// 3. Manejo de errores en múltiples promesas
async function multiplesOperaciones() {
  try {
    const resultados = await Promise.all([
      operacionAsincrona(),
      operacionAsincrona(),
      operacionAsincrona()
    ]);
    console.log("Todos los resultados:", resultados);
  } catch (error) {
    console.error("Error en operaciones múltiples:", error.message);
  }
}

multiplesOperaciones();

// 4. Manejo de errores personalizado
class ErrorPersonalizado extends Error {
  constructor(mensaje, codigo) {
    super(mensaje);
    this.codigo = codigo;
    this.name = "ErrorPersonalizado";
  }
}

async function operacionConErrorPersonalizado() {
  try {
    throw new ErrorPersonalizado("Error personalizado", 500);
  } catch (error) {
    if (error instanceof ErrorPersonalizado) {
      console.error(`Error ${error.codigo}: ${error.message}`);
    } else {
      console.error("Error desconocido:", error);
    }
  }
}

operacionConErrorPersonalizado();

// 5. Manejo de errores globales
process.on('unhandledRejection', (reason, promise) => {
  console.error('Promesa rechazada no manejada:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Excepción no capturada:', error);
  // Importante: en producción, deberías cerrar la aplicación
  // process.exit(1);
});

// 6. Retry con manejo de errores
async function operacionConReintentos(maxReintentos = 3) {
  let intentos = 0;
  
  while (intentos < maxReintentos) {
    try {
      const resultado = await operacionAsincrona();
      return resultado;
    } catch (error) {
      intentos++;
      console.log(`Intento ${intentos} fallido: ${error.message}`);
      if (intentos === maxReintentos) {
        throw new Error(`Máximo de reintentos alcanzado: ${error.message}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

operacionConReintentos()
  .then(resultado => console.log("Resultado final:", resultado))
  .catch(error => console.error("Error final:", error.message));

// 7. Manejo de errores en operaciones en paralelo
async function operacionesParalelasConManejo() {
  const promesas = [
    operacionAsincrona().catch(error => ({ error: error.message })),
    operacionAsincrona().catch(error => ({ error: error.message })),
    operacionAsincrona().catch(error => ({ error: error.message }))
  ];

  const resultados = await Promise.all(promesas);
  console.log("Resultados con manejo de errores:", resultados);
}

operacionesParalelasConManejo();

// 8. Middleware de manejo de errores para Express (ejemplo)
class ErrorHandler {
  static async manejarError(error, req, res, next) {
    console.error("Error:", error);
    
    if (error instanceof ErrorPersonalizado) {
      return res.status(error.codigo).json({
        error: error.message
      });
    }
    
    // Error no manejado
    return res.status(500).json({
      error: "Error interno del servidor"
    });
  }
}

// Ejemplo de uso del middleware
const express = require('express');
const app = express();

app.get('/ruta', async (req, res, next) => {
  try {
    const resultado = await operacionAsincrona();
    res.json({ resultado });
  } catch (error) {
    next(error);
  }
});

app.use(ErrorHandler.manejarError);
