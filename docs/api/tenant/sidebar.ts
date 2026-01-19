import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tenant/nexusevo-tenant-api",
    },
    {
      type: "category",
      label: "Tenant Auth",
      items: [
        {
          type: "doc",
          id: "api/tenant/auth/login-de-tenant",
          label: "Login de Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/tenant/auth/logout-de-tenant",
          label: "Logout de Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/tenant/auth/perfil-de-usuario",
          label: "Perfil de Usuario",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Mensajería",
      items: [
        {
          type: "category",
          label: "Devices",
          items: [
            {
              type: "doc",
              id: "api/tenant/devices/estado-del-dispositivo",
              label: "Estado del dispositivo",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/tenant/devices/listar-dispositivos",
              label: "Listar dispositivos",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/tenant/devices/crear-dispositivo",
              label: "Crear dispositivo",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/devices/ver-detalles-de-dispositivo",
              label: "Ver detalles de dispositivo",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/tenant/devices/actualizar-dispositivo",
              label: "Actualizar dispositivo",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/tenant/devices/eliminar-dispositivo",
              label: "Eliminar dispositivo",
              className: "api-method delete",
            },
          ],
        },
        {
          type: "category",
          label: "Send Message",
          items: [
            {
              type: "doc",
              id: "api/tenant/send-message/enviar-mensaje-de-texto",
              label: "Enviar mensaje de texto",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/send-message/enviar-media-imagen-video-audio",
              label: "Enviar media (imagen, video, audio)",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/send-message/enviar-archivo-pdf",
              label: "Enviar archivo PDF",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/send-message/enviar-ubicacion",
              label: "Enviar ubicación",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/send-message/enviar-contacto",
              label: "Enviar contacto",
              className: "api-method post",
            },
          ],
        },
        {
          type: "category",
          label: "Campaigns",
          items: [
            {
              type: "doc",
              id: "api/tenant/campaigns/listar-campanas",
              label: "Listar campañas",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/tenant/campaigns/crear-campana",
              label: "Crear campaña",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/tenant/campaigns/ver-detalles-de-campana",
              label: "Ver detalles de campaña",
              className: "api-method get",
            },
            {
              type: "doc",
              id: "api/tenant/campaigns/actualizar-campana",
              label: "Actualizar campaña",
              className: "api-method put",
            },
            {
              type: "doc",
              id: "api/tenant/campaigns/eliminar-campana",
              label: "Eliminar campaña",
              className: "api-method delete",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
