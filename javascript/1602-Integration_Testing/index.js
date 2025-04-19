/*
{
  "id": 1602,
  "title": "Integration Testing",
  "description": "Pruebas que verifican la interacción entre diferentes componentes del sistema."
}
*/

/*
  Concepto: Integration Testing
  Descripción: Las pruebas de integración verifican que diferentes componentes
  del sistema funcionen correctamente cuando se combinan. Estas pruebas son
  cruciales para asegurar que las partes individuales del sistema trabajen
  juntas como se espera.
*/

// ------------------ EJEMPLOS DE PRUEBAS DE INTEGRACIÓN ------------------

// 1. Integración entre servicios
class ServicioUsuario {
  constructor(repository, servicioEmail) {
    this.repository = repository;
    this.servicioEmail = servicioEmail;
  }

  async registrarUsuario(usuario) {
    // Guardar usuario
    const usuarioGuardado = await this.repository.guardar(usuario);
    
    // Enviar email de bienvenida
    await this.servicioEmail.enviar(
      usuario.email,
      'Bienvenido',
      '¡Gracias por registrarte!'
    );
    
    return usuarioGuardado;
  }
}

// Prueba de integración entre ServicioUsuario y sus dependencias
async function testIntegracionServicioUsuario() {
  // Configurar mocks
  const mockRepository = {
    usuarios: [],
    async guardar(usuario) {
      this.usuarios.push(usuario);
      return usuario;
    }
  };

  const mockServicioEmail = {
    emailsEnviados: [],
    async enviar(destinatario, asunto, mensaje) {
      this.emailsEnviados.push({ destinatario, asunto, mensaje });
    }
  };

  // Crear servicio con dependencias mock
  const servicio = new ServicioUsuario(mockRepository, mockServicioEmail);

  // Ejecutar prueba
  const usuario = {
    nombre: 'Juan',
    email: 'juan@ejemplo.com'
  };

  await servicio.registrarUsuario(usuario);

  // Verificar resultados
  console.assert(
    mockRepository.usuarios.length === 1,
    'Usuario debería estar guardado en el repositorio'
  );
  console.assert(
    mockServicioEmail.emailsEnviados.length === 1,
    'Email de bienvenida debería haber sido enviado'
  );
  console.assert(
    mockServicioEmail.emailsEnviados[0].destinatario === 'juan@ejemplo.com',
    'Email debería ser enviado al usuario correcto'
  );
}

// 2. Integración con API externa
class ServicioClima {
  constructor(apiClima) {
    this.apiClima = apiClima;
  }

  async obtenerClima(ciudad) {
    const datos = await this.apiClima.obtenerDatos(ciudad);
    return {
      temperatura: datos.main.temp,
      descripcion: datos.weather[0].description
    };
  }
}

// Prueba de integración con API de clima
async function testIntegracionServicioClima() {
  // Mock de la API de clima
  const mockApiClima = {
    async obtenerDatos(ciudad) {
      return {
        main: { temp: 25 },
        weather: [{ description: 'soleado' }]
      };
    }
  };

  const servicio = new ServicioClima(mockApiClima);
  const clima = await servicio.obtenerClima('Madrid');

  console.assert(
    clima.temperatura === 25,
    'Temperatura debería ser 25'
  );
  console.assert(
    clima.descripcion === 'soleado',
    'Descripción debería ser "soleado"'
  );
}

// 3. Integración entre múltiples servicios
class ServicioPedido {
  constructor(
    servicioUsuario,
    servicioProducto,
    servicioPago,
    servicioNotificacion
  ) {
    this.servicioUsuario = servicioUsuario;
    this.servicioProducto = servicioProducto;
    this.servicioPago = servicioPago;
    this.servicioNotificacion = servicioNotificacion;
  }

  async procesarPedido(usuarioId, productoId) {
    // Obtener datos necesarios
    const usuario = await this.servicioUsuario.obtenerUsuario(usuarioId);
    const producto = await this.servicioProducto.obtenerProducto(productoId);

    // Procesar pago
    const pago = await this.servicioPago.procesarPago(
      usuario,
      producto.precio
    );

    // Enviar notificación
    await this.servicioNotificacion.enviar(
      usuario.email,
      'Pedido procesado',
      `Tu pedido de ${producto.nombre} ha sido procesado`
    );

    return { usuario, producto, pago };
  }
}

// Prueba de integración del servicio de pedidos
async function testIntegracionServicioPedido() {
  // Configurar mocks
  const mockServicioUsuario = {
    async obtenerUsuario(id) {
      return { id, nombre: 'Juan', email: 'juan@ejemplo.com' };
    }
  };

  const mockServicioProducto = {
    async obtenerProducto(id) {
      return { id, nombre: 'Laptop', precio: 1000 };
    }
  };

  const mockServicioPago = {
    async procesarPago(usuario, monto) {
      return { id: 'pago-123', monto, estado: 'completado' };
    }
  };

  const mockServicioNotificacion = {
    notificaciones: [],
    async enviar(destinatario, asunto, mensaje) {
      this.notificaciones.push({ destinatario, asunto, mensaje });
    }
  };

  // Crear servicio con dependencias mock
  const servicio = new ServicioPedido(
    mockServicioUsuario,
    mockServicioProducto,
    mockServicioPago,
    mockServicioNotificacion
  );

  // Ejecutar prueba
  const resultado = await servicio.procesarPedido('user-123', 'prod-456');

  // Verificar resultados
  console.assert(
    resultado.usuario.nombre === 'Juan',
    'Usuario correcto'
  );
  console.assert(
    resultado.producto.nombre === 'Laptop',
    'Producto correcto'
  );
  console.assert(
    resultado.pago.estado === 'completado',
    'Pago procesado correctamente'
  );
  console.assert(
    mockServicioNotificacion.notificaciones.length === 1,
    'Notificación enviada'
  );
}

// 4. Ejecución de todas las pruebas de integración
async function ejecutarPruebasIntegracion() {
  console.log('Iniciando pruebas de integración...');
  
  await testIntegracionServicioUsuario();
  await testIntegracionServicioClima();
  await testIntegracionServicioPedido();
  
  console.log('Todas las pruebas de integración completadas');
}

// Ejecutar pruebas
ejecutarPruebasIntegracion().catch(error => {
  console.error('Error en las pruebas de integración:', error);
});
