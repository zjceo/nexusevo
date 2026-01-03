# Gestión de WhatsApp

NexusEvo permite a los clientes conectar y sincronizar sus cuentas de WhatsApp utilizando la **Evolution API**.

## Conexión de Dispositivos

Para comenzar a enviar mensajes, el usuario debe:

1. **Crear una Instancia**: Definir el nombre del dispositivo en el panel.
2. **Escanear Código QR**: El sistema generará un QR dinámico que debe ser escaneado desde la opción "Dispositivos vinculados" en WhatsApp.
3. **Verificar Estado**: Una vez conectado, el sistema mostrará el nivel de batería, nombre del perfil y estado de la conexión.

## Funcionalidades de Dispositivo

- **Sincronización de Contactos**: Descarga automática de la lista de contactos del teléfono a la plataforma.
- **Gestión de Chatwoot**: Integración opcional para manejar conversaciones interactivas.
- **Seguimiento de Estado**: Monitoreo en tiempo real de si el dispositivo está en línea (uptime).

## Mejores Prácticas

- **Rotación de Dispositivos**: Para envíos masivos, se recomienda usar múltiples instancias para distribuir la carga.
- **Intervalos de Envío**: NexusEvo implementa un sistema de `delay` configurable para evitar bloqueos por spam.
