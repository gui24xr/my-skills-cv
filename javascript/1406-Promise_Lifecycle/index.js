/*
{
  "id": 1406,
  "title": "Promise Lifecycle",
  "description": "Ciclo de vida completo de una Promise, desde su creación hasta su resolución o rechazo."
}
*/

/*
  Concepto: Promise Lifecycle
  Descripción: Las Promises en JavaScript tienen un ciclo de vida definido que incluye
  diferentes estados y métodos para manejar su resolución o rechazo. Entender este ciclo
  es crucial para trabajar efectivamente con código asíncrono.
*/

// ------------------ EJEMPLOS DEL CICLO DE VIDA DE UNA PROMISE ------------------

// 1. Estados básicos de una Promise
const promesaPendiente = new Promise((resolve, reject) => {
  // Estado: pending
  console.log("Promise en estado pendiente");
});

const promesaResuelta = Promise.resolve("Resuelta");
const promesaRechazada = Promise.reject(new Error("Rechazada"));

// 2. Métodos then() y catch()
promesaResuelta
  .then(resultado => {
    console.log("Promise resuelta:", resultado);
    return "Nuevo valor";
  })
  .then(nuevoValor => {
    console.log("Segundo then:", nuevoValor);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// 3. Método finally()
promesaResuelta
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error))
  .finally(() => {
    console.log("Finally: Se ejecuta siempre");
  });

// 4. Encadenamiento de Promises
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

esperar(1000)
  .then(() => {
    console.log("1 segundo después");
    return esperar(1000);
  })
  .then(() => {
    console.log("2 segundos después");
    return "Valor final";
  })
  .then(valor => {
    console.log("Valor final:", valor);
  });

// 5. Manejo de errores en cadena
Promise.resolve()
  .then(() => {
    throw new Error("Error en el primer then");
  })
  .then(() => {
    console.log("Este then no se ejecutará");
  })
  .catch(error => {
    console.error("Error capturado:", error.message);
    return "Recuperación del error";
  })
  .then(resultado => {
    console.log("Después del error:", resultado);
  });

// 6. Promise.all() - Todas las promesas deben resolverse
const promesasAll = [
  Promise.resolve(1),
  esperar(1000).then(() => 2),
  Promise.resolve(3)
];

Promise.all(promesasAll)
  .then(resultados => {
    console.log("Promise.all resultados:", resultados);
  })
  .catch(error => {
    console.error("Error en Promise.all:", error);
  });

// 7. Promise.race() - La primera promesa que se resuelva
const promesasRace = [
  esperar(2000).then(() => "Lenta"),
  esperar(1000).then(() => "Rápida")
];

Promise.race(promesasRace)
  .then(ganadora => {
    console.log("Promise.race ganadora:", ganadora);
  });

// 8. Promise.allSettled() - Todas las promesas se resuelven o rechazan
const promesasSettled = [
  Promise.resolve("Éxito"),
  Promise.reject(new Error("Fallo")),
  Promise.resolve("Otro éxito")
];

Promise.allSettled(promesasSettled)
  .then(resultados => {
    console.log("Promise.allSettled resultados:", resultados);
  });

// 9. Promise.any() - La primera promesa que se resuelva exitosamente
const promesasAny = [
  Promise.reject(new Error("Error 1")),
  esperar(1000).then(() => "Éxito 1"),
  Promise.reject(new Error("Error 2"))
];

Promise.any(promesasAny)
  .then(resultado => {
    console.log("Promise.any resultado:", resultado);
  })
  .catch(error => {
    console.error("Promise.any error:", error);
  });

// 10. Ejemplo de Promise con timeout
function promesaConTimeout(promesa, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Timeout después de ${ms}ms`));
    }, ms);
  });

  return Promise.race([promesa, timeout]);
}

const promesaLenta = esperar(2000).then(() => "Resultado lento");

promesaConTimeout(promesaLenta, 1000)
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error.message));
