/*
{
  "id": 1503,
  "title": "DRY (Don't Repeat Yourself)",
  "description": "Principio que recomienda evitar la duplicación de código para mejorar la mantenibilidad."
}
*/

/*
  Concepto: DRY (Don't Repeat Yourself)
  Descripción: El principio DRY establece que cada pieza de conocimiento debe tener
  una única representación en un sistema. Esto significa que no debemos repetir código
  o lógica en múltiples lugares, sino extraerla en funciones, clases o módulos reutilizables.
*/

// ------------------ EJEMPLOS DE PRINCIPIO DRY ------------------

// 1. Extracción de lógica repetitiva en funciones
// Mal
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

// Bien
function calcularArea(forma, ...dimensiones) {
  switch(forma) {
    case 'rectangulo':
      return dimensiones[0] * dimensiones[1];
    case 'triangulo':
      return (dimensiones[0] * dimensiones[1]) / 2;
    case 'circulo':
      return Math.PI * dimensiones[0] * dimensiones[0];
    default:
      throw new Error('Forma no soportada');
  }
}

// 2. Reutilización de validaciones
// Mal
function validarUsuario(usuario) {
  if (!usuario.nombre || usuario.nombre.length < 3) {
    return false;
  }
  if (!usuario.email || !usuario.email.includes('@')) {
    return false;
  }
  if (!usuario.edad || usuario.edad < 18) {
    return false;
  }
  return true;
}

function validarProducto(producto) {
  if (!producto.nombre || producto.nombre.length < 3) {
    return false;
  }
  if (!producto.precio || producto.precio <= 0) {
    return false;
  }
  return true;
}

// Bien
function validarCampoRequerido(valor, longitudMinima = 3) {
  return valor && valor.length >= longitudMinima;
}

function validarEmail(email) {
  return email && email.includes('@');
}

function validarEdad(edad, minima = 18) {
  return edad && edad >= minima;
}

function validarPrecio(precio) {
  return precio && precio > 0;
}

function validarUsuario(usuario) {
  return validarCampoRequerido(usuario.nombre) &&
         validarEmail(usuario.email) &&
         validarEdad(usuario.edad);
}

function validarProducto(producto) {
  return validarCampoRequerido(producto.nombre) &&
         validarPrecio(producto.precio);
}

// 3. Extracción de constantes
// Mal
function calcularPrecioConIVA(precio) {
  return precio * 1.21;
}

function calcularPrecioSinIVA(precio) {
  return precio / 1.21;
}

// Bien
const IVA = 1.21;

function calcularPrecioConIVA(precio) {
  return precio * IVA;
}

function calcularPrecioSinIVA(precio) {
  return precio / IVA;
}

// 4. Reutilización de configuraciones
// Mal
class ServicioEmail {
  constructor() {
    this.host = 'smtp.gmail.com';
    this.puerto = 587;
    this.usuario = 'usuario@gmail.com';
    this.contraseña = 'contraseña';
  }
}

class ServicioFTP {
  constructor() {
    this.host = 'ftp.ejemplo.com';
    this.puerto = 21;
    this.usuario = 'usuario';
    this.contraseña = 'contraseña';
  }
}

// Bien
const configuracion = {
  email: {
    host: 'smtp.gmail.com',
    puerto: 587,
    usuario: 'usuario@gmail.com',
    contraseña: 'contraseña'
  },
  ftp: {
    host: 'ftp.ejemplo.com',
    puerto: 21,
    usuario: 'usuario',
    contraseña: 'contraseña'
  }
};

class ServicioEmail {
  constructor() {
    this.config = configuracion.email;
  }
}

class ServicioFTP {
  constructor() {
    this.config = configuracion.ftp;
  }
}

// 5. Extracción de lógica de transformación
// Mal
function procesarUsuarios(usuarios) {
  return usuarios.map(usuario => ({
    nombre: usuario.nombre.toUpperCase(),
    email: usuario.email.toLowerCase(),
    edad: usuario.edad + 1
  }));
}

function procesarProductos(productos) {
  return productos.map(producto => ({
    nombre: producto.nombre.toUpperCase(),
    precio: producto.precio * 1.21
  }));
}

// Bien
function transformarNombre(nombre) {
  return nombre.toUpperCase();
}

function transformarEmail(email) {
  return email.toLowerCase();
}

function transformarEdad(edad) {
  return edad + 1;
}

function transformarPrecio(precio) {
  return precio * IVA;
}

function procesarUsuarios(usuarios) {
  return usuarios.map(usuario => ({
    nombre: transformarNombre(usuario.nombre),
    email: transformarEmail(usuario.email),
    edad: transformarEdad(usuario.edad)
  }));
}

function procesarProductos(productos) {
  return productos.map(producto => ({
    nombre: transformarNombre(producto.nombre),
    precio: transformarPrecio(producto.precio)
  }));
}

// 6. Ejemplo de uso de todos los principios DRY
class ServicioProcesamiento {
  constructor(config) {
    this.config = config;
  }

  validarDatos(datos, reglas) {
    return reglas.every(regla => regla(datos));
  }

  transformarDatos(datos, transformaciones) {
    return Object.entries(transformaciones).reduce((resultado, [campo, transformacion]) => {
      resultado[campo] = transformacion(datos[campo]);
      return resultado;
    }, {});
  }

  procesar(datos, reglas, transformaciones) {
    if (!this.validarDatos(datos, reglas)) {
      throw new Error('Datos inválidos');
    }
    return this.transformarDatos(datos, transformaciones);
  }
}

// Uso
const servicio = new ServicioProcesamiento(configuracion);

const usuario = {
  nombre: 'Juan',
  email: 'juan@ejemplo.com',
  edad: 25
};

const reglasUsuario = [
  datos => validarCampoRequerido(datos.nombre),
  datos => validarEmail(datos.email),
  datos => validarEdad(datos.edad)
];

const transformacionesUsuario = {
  nombre: transformarNombre,
  email: transformarEmail,
  edad: transformarEdad
};

const usuarioProcesado = servicio.procesar(usuario, reglasUsuario, transformacionesUsuario);
