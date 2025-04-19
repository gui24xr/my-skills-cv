/*
{
  "id": 1403,
  "title": "Async/Await",
  "description": "Sintaxis moderna para trabajar con promesas de manera más legible y mantenible."
}
*/

/*
  Concepto: Async/Await
  Descripción: Async/await es una forma moderna de trabajar con código asíncrono en JavaScript.
  Permite escribir código asíncrono de manera similar al código síncrono, haciendo que sea
  más fácil de leer y mantener.
*/

// ------------------ EJEMPLOS DE ASYNC/AWAIT ------------------

// 1. Función async básica
async function obtenerDatos() {
  return "Datos obtenidos";
}

obtenerDatos().then(resultado => {
  console.log(resultado);
});

// 2. Async/await con promesas
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function procesoAsincrono() {
  console.log("Iniciando proceso...");
  await esperar(1000);
  console.log("Paso 1 completado");
  await esperar(1000);
  console.log("Paso 2 completado");
  return "Proceso finalizado";
}

procesoAsincrono().then(resultado => {
  console.log(resultado);
});

// 3. Manejo de errores con try/catch
async function operacionConError() {
  try {
    const resultado = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Error simulado"), 1000);
    });
    return resultado;
  } catch (error) {
    console.error("Error capturado:", error);
    throw error; // Re-lanzar el error si es necesario
  }
}

operacionConError().catch(error => {
  console.error("Error final:", error);
});

// 4. Múltiples operaciones asíncronas
async function obtenerMultiplesDatos() {
  const [datos1, datos2] = await Promise.all([
    new Promise(resolve => setTimeout(() => resolve("Datos 1"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Datos 2"), 1500))
  ]);
  
  return { datos1, datos2 };
}

obtenerMultiplesDatos().then(resultado => {
  console.log("Resultados:", resultado);
});

// 5. Async/await en métodos de clase
class ServicioAPI {
  async obtenerUsuario(id) {
    await esperar(1000);
    return { id, nombre: `Usuario ${id}` };
  }

  async obtenerPosts(usuarioId) {
    await esperar(1000);
    return [
      { id: 1, titulo: "Post 1" },
      { id: 2, titulo: "Post 2" }
    ];
  }
}

async function usarServicioAPI() {
  const api = new ServicioAPI();
  const usuario = await api.obtenerUsuario(1);
  const posts = await api.obtenerPosts(usuario.id);
  console.log("Usuario y posts:", { usuario, posts });
}

usarServicioAPI();

// 6. Async/await con iteración
async function procesarElementos(elementos) {
  for (const elemento of elementos) {
    await esperar(500);
    console.log("Procesando:", elemento);
  }
}

procesarElementos([1, 2, 3, 4, 5]);

// 7. Async/await con generadores
async function* generadorAsincrono() {
  yield await new Promise(resolve => setTimeout(() => resolve(1), 1000));
  yield await new Promise(resolve => setTimeout(() => resolve(2), 1000));
  yield await new Promise(resolve => setTimeout(() => resolve(3), 1000));
}

async function consumirGenerador() {
  for await (const valor of generadorAsincrono()) {
    console.log("Valor del generador:", valor);
  }
}

consumirGenerador();

// 8. Async/await con operaciones en paralelo
async function operacionesParalelas() {
  const promesa1 = esperar(1000).then(() => "Resultado 1");
  const promesa2 = esperar(1500).then(() => "Resultado 2");
  const promesa3 = esperar(2000).then(() => "Resultado 3");

  const resultados = await Promise.all([promesa1, promesa2, promesa3]);
  console.log("Resultados en paralelo:", resultados);
}

operacionesParalelas(); 