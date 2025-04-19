/*
{
  "id": 1402,
  "title": "Promises",
  "description": "Objetos que representan la eventual finalización (o fallo) de una operación asíncrona y su valor resultante."
}
*/

/*
  Concepto: Promises
  Descripción: Las Promises son objetos que representan un valor que puede estar disponible ahora,
  en el futuro o nunca. Proporcionan una forma más elegante de manejar operaciones asíncronas
  en comparación con los callbacks tradicionales.
*/

// ------------------ EJEMPLOS DE PROMISES ------------------

// 1. Promise básica
const promesaBasica = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("¡Operación completada!");
  }, 1000);
});

promesaBasica.then(resultado => {
  console.log(resultado);
});

// 2. Promise con manejo de errores
const promesaConError = new Promise((resolve, reject) => {
  const exito = false;
  
  if (exito) {
    resolve("Todo salió bien");
  } else {
    reject("Algo salió mal");
  }
});

promesaConError
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));

// 3. Promise.all - Múltiples promesas
const promesa1 = Promise.resolve(1);
const promesa2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
const promesa3 = Promise.resolve(3);

Promise.all([promesa1, promesa2, promesa3])
  .then(valores => {
    console.log("Todos los valores:", valores);
  });

// 4. Promise.race - La primera que se complete
const promesaRapida = new Promise(resolve => setTimeout(() => resolve("Rápida"), 500));
const promesaLenta = new Promise(resolve => setTimeout(() => resolve("Lenta"), 1000));

Promise.race([promesaRapida, promesaLenta])
  .then(resultado => {
    console.log("La promesa ganadora es:", resultado);
  });

// 5. Encadenamiento de promesas
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nombre: "Usuario " + id });
    }, 1000);
  });
}

function obtenerPosts(usuario) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, titulo: "Post 1" },
        { id: 2, titulo: "Post 2" }
      ]);
    }, 1000);
  });
}

obtenerUsuario(1)
  .then(usuario => {
    console.log("Usuario obtenido:", usuario);
    return obtenerPosts(usuario);
  })
  .then(posts => {
    console.log("Posts obtenidos:", posts);
  });

// 6. Async/await con promesas
async function obtenerDatosCompletos() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log("Usuario (async/await):", usuario);
    
    const posts = await obtenerPosts(usuario);
    console.log("Posts (async/await):", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatosCompletos();

// 7. Promise personalizada con retry
function operacionConReintentos(operacion, maxReintentos = 3) {
  return new Promise((resolve, reject) => {
    let intentos = 0;
    
    function ejecutar() {
      operacion()
        .then(resolve)
        .catch(error => {
          intentos++;
          if (intentos < maxReintentos) {
            console.log(`Reintentando... (${intentos}/${maxReintentos})`);
            setTimeout(ejecutar, 1000);
          } else {
            reject(error);
          }
        });
    }
    
    ejecutar();
  });
}

// Ejemplo de uso de retry
const operacionFallible = () => new Promise((resolve, reject) => {
  const exito = Math.random() > 0.5;
  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Error en la operación");
  }
});

operacionConReintentos(operacionFallible)
  .then(resultado => console.log("Resultado final:", resultado))
  .catch(error => console.error("Error final:", error));
