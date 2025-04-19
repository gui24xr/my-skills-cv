// Define una capacidad como función pura que recibe un estado
// Devuelve un objeto con el método correspondiente
function puedeHablar(state) {
  return {
    hablar() {
      console.log(`${state.nombre} dice: Hola.`);
    }
  };
}

function puedeCaminar(state) {
  return {
    caminar() {
      console.log(`${state.nombre} está caminando.`);
    }
  };
}

function puedeComer(state) {
  return {
    comer() {
      console.log(`${state.nombre} está comiendo.`);
    }
  };
}

// Object composition: se combinan funcionalidades reutilizables
// No hay herencia ni clases; se construye por agregación
function crearPersona(nombre) {
  const state = { nombre }; // Estado compartido por los comportamientos

  return {
    ...puedeHablar(state),
    ...puedeCaminar(state),
    ...puedeComer(state)
  };
}

// Uso de la instancia compuesta
const persona = crearPersona("Lucía");

persona.hablar();   // Usa comportamiento de puedeHablar
persona.caminar();  // Usa comportamiento de puedeCaminar
persona.comer();    // Usa comportamiento de puedeComer
