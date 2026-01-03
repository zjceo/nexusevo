# Administración de Tenants

La administración de tenants es el corazón del sistema central de NexusEvo. Permite gestionar quién utiliza la plataforma y bajo qué condiciones.

## Gestión de Clientes

Desde el panel de administración, los superadministradores pueden:

- **Crear Tenants**: Configuración automática de bases de datos y dominios.
- **Asignar Planes**: Vincular a un cliente con un conjunto de límites predefinidos.
- **Estado de Suscripción**: Activar, suspender o dar de baja servicios.
- **Dominios Personalizados**: Configurar el slug o dominio principal del cliente.

## Seguridad e Aislamiento

Cada tenant tiene su propia base de datos física. Esto garantiza que:

1. Las filtraciones de datos se limiten a un solo cliente.
2. El rendimiento de un cliente no afecte directamente a los demás (Noisy Neighbor).
3. Las copias de seguridad puedan gestionarse de forma independiente.

## Límites de Plan

El sistema controla automáticamente los siguientes límites:

- Número de contactos permitidos.
- Máximo de dispositivos WhatsApp conectados.
- Volumen mensual de mensajes enviados.
- Acceso a funcionalidades avanzadas (como IA o integraciones complejas).
