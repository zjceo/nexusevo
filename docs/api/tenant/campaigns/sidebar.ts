import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tenant/campaigns/nexusevo-tenant-api-campaigns",
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
};

export default sidebar.apisidebar;
