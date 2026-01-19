---
sidebar_position: 1
---

import Badge from '@site/src/components/Badge/Badge';
import Callout from '@site/src/components/Callout/Callout';
import ApiEndpoint from '@site/src/components/ApiEndpoint/ApiEndpoint';
import FeatureList from '@site/src/components/FeatureList/FeatureList';
import Card from '@site/src/components/Card/Card';
import CardGrid from '@site/src/components/CardGrid/CardGrid';

# Guía de Componentes

Esta página muestra todos los componentes personalizados disponibles en la documentación de NexusEvo.

---

## 🏷️ Badges

Los badges son útiles para mostrar estados, versiones o etiquetas.

### Variantes

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
  <Badge variant="default">Default</Badge>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="info">Info</Badge>
</div>

### Tamaños

<div style={{display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem'}}>
  <Badge variant="primary" size="sm">Small</Badge>
  <Badge variant="primary" size="md">Medium</Badge>
  <Badge variant="primary" size="lg">Large</Badge>
</div>

### Uso en Código

```jsx
import Badge from '@site/src/components/Badge/Badge';

<Badge variant="success">v1.0.0</Badge>
<Badge variant="warning">Beta</Badge>
<Badge variant="danger">Deprecated</Badge>
```

---

## 📢 Callouts

Los callouts son perfectos para resaltar información importante.

<Callout type="note">
  Esta es una nota informativa. Úsala para proporcionar contexto adicional o información relevante.
</Callout>

<Callout type="tip">
  Este es un consejo útil. Comparte mejores prácticas o sugerencias con tus usuarios.
</Callout>

<Callout type="important">
  Esto es importante. Destaca información crítica que los usuarios deben conocer.
</Callout>

<Callout type="warning">
  Esta es una advertencia. Alerta sobre posibles problemas o limitaciones.
</Callout>

<Callout type="caution">
  Esta es una precaución. Indica acciones que requieren cuidado especial.
</Callout>

### Callout Personalizado

<Callout type="note" title="Título Personalizado" icon="🚀">
  Puedes personalizar el título y el icono de cualquier callout.
</Callout>

### Uso en Código

```jsx
import Callout from '@site/src/components/Callout/Callout';

<Callout type="tip">
  Recuerda siempre validar los datos de entrada antes de procesarlos.
</Callout>

<Callout type="warning" title="Atención" icon="⚠️">
  Esta operación es irreversible.
</Callout>
```

---

## 🔌 API Endpoints

Documenta endpoints de API de forma rápida y visual.

<ApiEndpoint 
  method="GET" 
  path="/api/v1/tenants" 
  description="Obtiene la lista de todos los tenants activos"
/>

<ApiEndpoint 
  method="POST" 
  path="/api/v1/tenants" 
  description="Crea un nuevo tenant en el sistema"
  auth={true}
/>

<ApiEndpoint 
  method="PUT" 
  path="/api/v1/tenants/{id}" 
  description="Actualiza la información de un tenant existente"
  auth={true}
/>

<ApiEndpoint 
  method="DELETE" 
  path="/api/v1/tenants/{id}" 
  description="Elimina un tenant del sistema"
  auth={true}
/>

<ApiEndpoint 
  method="PATCH" 
  path="/api/v1/tenants/{id}/status" 
  description="Actualiza el estado de un tenant"
  auth={true}
/>

### Uso en Código

```jsx
import ApiEndpoint from "@site/src/components/ApiEndpoint/ApiEndpoint";

<ApiEndpoint
  method="POST"
  path="/api/v1/messages/send"
  description="Envía un mensaje de WhatsApp"
  auth={true}
/>;
```

---

## ✨ Feature List

Muestra características de forma atractiva y organizada.

<FeatureList
columns={3}
features={[
{
icon: '🚀',
title: 'Rápido',
description: 'Procesamiento ultra-rápido de mensajes con colas optimizadas'
},
{
icon: '🔒',
title: 'Seguro',
description: 'Aislamiento completo de datos con arquitectura multi-tenant'
},
{
icon: '📊',
title: 'Analytics',
description: 'Métricas detalladas en tiempo real de todas tus campañas'
},
{
icon: '🌐',
title: 'Multi-canal',
description: 'WhatsApp y Email en una sola plataforma integrada'
},
{
icon: '⚡',
title: 'Escalable',
description: 'Crece con tu negocio sin límites de capacidad'
},
{
icon: '🎯',
title: 'Preciso',
description: 'Segmentación avanzada para campañas personalizadas'
}
]}
/>

### Uso en Código

```jsx
import FeatureList from "@site/src/components/FeatureList/FeatureList";

<FeatureList
  columns={3}
  features={[
    {
      icon: "🚀",
      title: "Característica",
      description: "Descripción de la característica",
    },
  ]}
/>;
```

---

## 🎴 Cards

Las cards son versátiles y se pueden usar para muchos propósitos.

<CardGrid cols={3}>
  <Card icon="📖" title="Documentación" variant="primary">
    Accede a guías completas y referencias de API.
  </Card>
  
  <Card icon="💬" title="Soporte" variant="success">
    Obtén ayuda de nuestro equipo de soporte técnico.
  </Card>
  
  <Card icon="🔧" title="Herramientas" variant="warning">
    Descarga SDKs y herramientas de desarrollo.
  </Card>
</CardGrid>

### Cards con Enlaces

<CardGrid cols={2}>
  <Card 
    icon="🔐" 
    title="Admin API" 
    href="/api/admin"
    variant="primary"
  >
    API de administración para gestionar tenants y configuración.
  </Card>
  
  <Card 
    icon="👤" 
    title="Tenant API" 
    href="/api/tenant"
    variant="success"
  >
    API completa para funcionalidades de mensajería.
  </Card>
</CardGrid>

---

## 🎨 Combinando Componentes

Puedes combinar componentes para crear documentación rica y atractiva:

<Card icon="📚" title="Ejemplo de Integración" variant="primary">

<Callout type="tip">
  Este ejemplo muestra cómo combinar múltiples componentes.
</Callout>

**Endpoint de autenticación:**

<ApiEndpoint 
  method="POST" 
  path="/api/v1/auth/login" 
  description="Autentica un usuario y devuelve un token JWT"
/>

**Estado de la API:** <Badge variant="success">Operativa</Badge>

</Card>

---

## 💡 Consejos de Uso

<Callout type="note">
  Todos estos componentes están optimizados para dark mode y son completamente responsive.
</Callout>

<FeatureList
columns={2}
features={[
{
icon: '🎨',
title: 'Personalizable',
description: 'Todos los componentes aceptan props para personalizar su apariencia'
},
{
icon: '📱',
title: 'Responsive',
description: 'Se adaptan automáticamente a diferentes tamaños de pantalla'
},
{
icon: '🌙',
title: 'Dark Mode',
description: 'Soporte completo para modo oscuro sin configuración adicional'
},
{
icon: '⚡',
title: 'Performante',
description: 'Optimizados para carga rápida y mínimo impacto en rendimiento'
}
]}
/>
