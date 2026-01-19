import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tenant/send-message/nexusevo-tenant-api-send-message",
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
  ],
};

export default sidebar.apisidebar;
