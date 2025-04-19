/*
{
  "id": 1502,
  "title": "SOLID Principles",
  "description": "Los cinco principios fundamentales del diseño orientado a objetos que hacen que el software sea más comprensible, flexible y mantenible."
}
*/

/*
  Concepto: SOLID Principles
  Descripción: SOLID es un acrónimo que representa cinco principios de diseño de software:
  - S: Single Responsibility Principle (Principio de Responsabilidad Única)
  - O: Open/Closed Principle (Principio Abierto/Cerrado)
  - L: Liskov Substitution Principle (Principio de Sustitución de Liskov)
  - I: Interface Segregation Principle (Principio de Segregación de Interfaces)
  - D: Dependency Inversion Principle (Principio de Inversión de Dependencias)
*/

// ------------------ EJEMPLOS DE PRINCIPIOS SOLID ------------------

// 1. Single Responsibility Principle (SRP)
// Mal
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  guardarUsuario() {
    // Lógica para guardar en base de datos
  }

  enviarEmail() {
    // Lógica para enviar email
  }

  validarUsuario() {
    // Lógica para validar datos
  }
}

// Bien
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class UsuarioRepository {
  guardar(usuario) {
    // Lógica para guardar en base de datos
  }
}

class EmailService {
  enviar(usuario) {
    // Lógica para enviar email
  }
}

class UsuarioValidator {
  validar(usuario) {
    // Lógica para validar datos
  }
}

// 2. Open/Closed Principle (OCP)
// Mal
class Calculadora {
  calcular(operacion, a, b) {
    switch(operacion) {
      case 'suma':
        return a + b;
      case 'resta':
        return a - b;
      // Cada nueva operación requiere modificar esta clase
    }
  }
}

// Bien
class Operacion {
  calcular(a, b) {}
}

class Suma extends Operacion {
  calcular(a, b) {
    return a + b;
  }
}

class Resta extends Operacion {
  calcular(a, b) {
    return a - b;
  }
}

class Calculadora {
  calcular(operacion, a, b) {
    return operacion.calcular(a, b);
  }
}

// 3. Liskov Substitution Principle (LSP)
// Mal
class Pajaro {
  volar() {
    return "Volando";
  }
}

class Pinguino extends Pajaro {
  volar() {
    throw new Error("Los pingüinos no pueden volar");
  }
}

// Bien
class Ave {
  comer() {
    return "Comiendo";
  }
}

class AveVoladora extends Ave {
  volar() {
    return "Volando";
  }
}

class Pinguino extends Ave {
  nadar() {
    return "Nadando";
  }
}

// 4. Interface Segregation Principle (ISP)
// Mal
class Trabajador {
  trabajar() {}
  comer() {}
  dormir() {}
}

class Robot extends Trabajador {
  trabajar() {
    return "Trabajando";
  }
  comer() {
    throw new Error("Los robots no comen");
  }
  dormir() {
    throw new Error("Los robots no duermen");
  }
}

// Bien
class Trabajador {
  trabajar() {}
}

class SerVivo {
  comer() {}
  dormir() {}
}

class Humano extends Trabajador {
  constructor() {
    super();
    this.serVivo = new SerVivo();
  }
  
  trabajar() {
    return "Trabajando";
  }
  
  comer() {
    return this.serVivo.comer();
  }
  
  dormir() {
    return this.serVivo.dormir();
  }
}

class Robot extends Trabajador {
  trabajar() {
    return "Trabajando";
  }
}

// 5. Dependency Inversion Principle (DIP)
// Mal
class ServicioEmail {
  constructor() {
    this.smtp = new SMTPClient();
  }
  
  enviar(mensaje) {
    this.smtp.enviar(mensaje);
  }
}

// Bien
class ServicioEmail {
  constructor(clienteEmail) {
    this.clienteEmail = clienteEmail;
  }
  
  enviar(mensaje) {
    this.clienteEmail.enviar(mensaje);
  }
}

// Ejemplo de uso de todos los principios
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class ProductoRepository {
  guardar(producto) {
    // Lógica para guardar producto
  }
}

class CalculadoraPrecio {
  calcular(precio) {
    return precio * 1.21; // IVA incluido
  }
}

class ServicioProducto {
  constructor(repository, calculadora) {
    this.repository = repository;
    this.calculadora = calculadora;
  }
  
  procesarProducto(producto) {
    const precioConIVA = this.calculadora.calcular(producto.precio);
    const productoProcesado = new Producto(producto.nombre, precioConIVA);
    this.repository.guardar(productoProcesado);
    return productoProcesado;
  }
}

// Uso
const repository = new ProductoRepository();
const calculadora = new CalculadoraPrecio();
const servicio = new ServicioProducto(repository, calculadora);

const producto = new Producto("Laptop", 1000);
const resultado = servicio.procesarProducto(producto);
