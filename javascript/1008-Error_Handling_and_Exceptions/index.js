/*
  Concepto 08: Error Handling and Exceptions
  Descripción:
  Captura y manejo de errores usando try, catch y finally.
*/

// ------------------ 1. Uso básico de try y catch ------------------

try {
  const resultado = 10 / 0;  // División por cero, no da error pero el resultado será infinito
  console.log(resultado);
} catch (error) {
  console.error("Se ha producido un error:", error);
}

// ------------------ 2. Lanzar un error con throw ------------------

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

try {
  const division = dividir(10, 0);  // Esto lanzará un error
  console.log(division);
} catch (error) {
  console.error("Error de división:", error.message);
}

// ------------------ 3. Uso de finally ------------------

function manejarArchivos() {
  try {
    console.log("Intentando leer el archivo...");
    // Simular un error
    throw new Error("Error al leer el archivo");
  } catch (error) {
    console.error("Se produjo un error:", error.message);
  } finally {
    console.log("Este bloque se ejecutará siempre, independientemente de si hubo error o no.");
  }
}

manejarArchivos();

// ------------------ 4. Uso de múltiples bloques catch ------------------

try {
  // Simulando una operación que puede causar diferentes tipos de errores
  const nombre = undefined;
  console.log(nombre.length);  // Esto causará un TypeError

} catch (error) {
  if (error instanceof TypeError) {
    console.error("Tipo de error:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Error de referencia:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}
