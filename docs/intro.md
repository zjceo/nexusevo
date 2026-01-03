---
title: "NexusEvo"
slug: /
sidebar_position: 1
hide_table_of_contents: true
---

# NexusEvo

**NexusEvo** es una plataforma SaaS multi-tenant diseñada para la gestión integral de comunicaciones masivas a través de WhatsApp y correo electrónico.

La plataforma permite a las empresas (tenants) aislar sus datos de forma segura, gestionar múltiples dispositivos de WhatsApp mediante la **Evolution API**, y ejecutar campañas de marketing y notificaciones a gran escala.

## Características Principales

### 🏢 Administración Central

- **Gestión de Tenants**: Control total sobre el ciclo de vida de los clientes.
- **Planes y Suscripciones**: Sistema flexible para definir límites de contactos, mensajes y dispositivos.
- **Monitoreo de Servidores**: Administración de instancias de Evolution API.

### 👥 Panel del Cliente (Tenant)

- **WhatsApp Multi-dispositivo**: Conexión y gestión de múltiples números de WhatsApp.
- **Campañas Multicanal**: Envío programado de mensajes de WhatsApp y correos electrónicos (SMTP).
- **Gestión de Contactos**: Segmentación por etiquetas e importación masiva.
- **Analytics**: Métricas detalladas de envío, recepción y engagement.

## Arquitectura

NexusEvo utiliza una arquitectura de **Base de Datos por Tenant**, lo que garantiza la máxima privacidad y seguridad de los datos para cada cliente. Está construido con un stack moderno:

- **Backend**: Laravel 12 (PHP 8.3+)
- **Frontend**: Vue 3 + Inertia.js + TailwindCSS 4
- **Base de Datos**: MySQL
- **Integración**: Evolution API v2
