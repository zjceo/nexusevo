import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/nexusevo-messaging-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/obtener-estado-del-dispositivo",
          label: "Obtener estado del dispositivo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/enviar-mensaje-de-texto",
          label: "Enviar mensaje de texto",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/enviar-media-imagen-video-audio",
          label: "Enviar media (imagen, video, audio)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/enviar-archivo-pdf",
          label: "Enviar archivo PDF",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
