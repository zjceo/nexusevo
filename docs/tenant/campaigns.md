# Campañas de Comunicación

NexusEvo ofrece potentes herramientas para ejecutar campañas masivas a través de múltiples canales.

## Campañas de WhatsApp

Las campañas de WhatsApp permiten el envío masivo de mensajes directos.

- **Programación**: Ejecución inmediata o programada para una fecha y hora futura.
- **Tipos de Mensajes**: Texto plano, imágenes, videos, audios, archivos PDF, ubicaciones y contactos.
- **Variables Dinámicas**: Personalización de mensajes usando datos del contacto (ej: `Hola {{name}}`).
- **Seguimiento**: Reporte detallado de mensajes enviados, fallidos y leídos.

## Campañas de Email

Para comunicaciones que requieren un formato más largo o formal.

- **Integración SMTP**: Cada tenant puede configurar sus propias credenciales de servidor de correo.
- **Plantillas**: Creación de contenido enriquecido con soporte para adjuntos.
- **Métricas**: Seguimiento básico de entrega.

## Flujo de Trabajo

1. **Selección de Audiencia**: Elegir una etiqueta o lista de contactos.
2. **Contenido**: Definir el tipo de mensaje y multimedia.
3. **Configuración de Envío**: Definir el intervalo entre mensajes (Anti-spam) y seleccionar el dispositivo de salida.
4. **Confirmación y Lanzamiento**: El sistema procesa la campaña en segundo plano mediante colas de Laravel.
