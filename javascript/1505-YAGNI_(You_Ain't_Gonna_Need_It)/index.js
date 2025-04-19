/*
{
  "id": 1505,
  "title": "YAGNI (You Ain't Gonna Need It)",
  "description": "Principio que recomienda no implementar funcionalidades hasta que sean realmente necesarias."
}
*/

/*
  Concepto: YAGNI (You Ain't Gonna Need It)
  Descripción: El principio YAGNI establece que no se debe agregar funcionalidad
  hasta que sea realmente necesaria. Esto ayuda a evitar la sobreingeniería y
  mantiene el código más simple y mantenible.
*/

// ------------------ EJEMPLOS DE PRINCIPIO YAGNI ------------------

// 1. Evitar funcionalidades futuras innecesarias
// Mal
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.roles = []; // Implementado "por si acaso" se necesitan roles en el futuro
    this.preferencias = {}; // Implementado "por si acaso" se necesitan preferencias
    this.historial = []; // Implementado "por si acaso" se necesita historial
  }

  // Métodos que podrían ser necesarios en el futuro
  agregarRol(rol) {
    this.roles.push(rol);
  }

  guardarPreferencia(clave, valor) {
    this.preferencias[clave] = valor;
  }

  agregarAlHistorial(accion) {
    this.historial.push({
      accion,
      fecha: new Date()
    });
  }
}

// Bien
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

// 2. Evitar abstracciones prematuras
// Mal
class ServicioNotificaciones {
  constructor() {
    this.proveedores = {
      email: new EmailService(),
      sms: new SMSService(),
      push: new PushService()
    };
  }

  enviar(usuario, mensaje, tipo = 'email') {
    return this.proveedores[tipo].enviar(usuario, mensaje);
  }
}

// Bien
class EmailService {
  enviar(usuario, mensaje) {
    // Implementación específica para email
  }
}

// 3. Evitar configuraciones innecesarias
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
    this.logLevel = 'debug';
    this.logFormat = 'json';
    this.logPath = './logs';
  }
}

// Bien
const configuracion = {
  apiUrl: 'https://api.ejemplo.com',
  timeout: 5000
};

// 4. Evitar validaciones excesivas
// Mal
function validarUsuario(usuario) {
  if (!usuario.nombre || usuario.nombre.length < 3) {
    throw new Error('Nombre inválido');
  }
  if (!usuario.email || !usuario.email.includes('@')) {
    throw new Error('Email inválido');
  }
  if (!usuario.edad || usuario.edad < 18) {
    throw new Error('Edad inválida');
  }
  if (!usuario.telefono || !/^\d{10}$/.test(usuario.telefono)) {
    throw new Error('Teléfono inválido');
  }
  if (!usuario.direccion || usuario.direccion.length < 5) {
    throw new Error('Dirección inválida');
  }
  return true;
}

// Bien
function validarUsuario(usuario) {
  if (!usuario.nombre || usuario.nombre.length < 3) {
    throw new Error('Nombre inválido');
  }
  if (!usuario.email || !usuario.email.includes('@')) {
    throw new Error('Email inválido');
  }
  return true;
}

// 5. Evitar métodos de utilidad genéricos
// Mal
class Utilidades {
  static formatearFecha(fecha) {
    return fecha.toLocaleDateString();
  }

  static formatearMoneda(monto) {
    return `$${monto.toFixed(2)}`;
  }

  static formatearPorcentaje(valor) {
    return `${(valor * 100).toFixed(2)}%`;
  }

  static formatearTelefono(numero) {
    return numero.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}

// Bien
function formatearFecha(fecha) {
  return fecha.toLocaleDateString();
}

// 6. Evitar interfaces genéricas
// Mal
class Repositorio {
  constructor() {
    this.datos = [];
  }

  crear(dato) {
    this.datos.push(dato);
  }

  leer(id) {
    return this.datos.find(d => d.id === id);
  }

  actualizar(id, dato) {
    const index = this.datos.findIndex(d => d.id === id);
    if (index !== -1) {
      this.datos[index] = dato;
    }
  }

  eliminar(id) {
    this.datos = this.datos.filter(d => d.id !== id);
  }
}

// Bien
class UsuarioRepository {
  constructor() {
    this.usuarios = [];
  }

  guardar(usuario) {
    this.usuarios.push(usuario);
  }

  obtenerPorEmail(email) {
    return this.usuarios.find(u => u.email === email);
  }
}

// 7. Ejemplo de aplicación del principio YAGNI
class ServicioSimple {
  constructor(config) {
    this.config = config;
  }

  async obtenerDatos() {
    try {
      const respuesta = await fetch(this.config.apiUrl);
      return await respuesta.json();
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
}

// Uso
const servicio = new ServicioSimple(configuracion);
const datos = await servicio.obtenerDatos(); 