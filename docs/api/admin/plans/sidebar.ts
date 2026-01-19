import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/admin/plans/nexusevo-system-api-plans",
    },
    {
      type: "category",
      label: "System Plans",
      items: [
        {
          type: "doc",
          id: "api/admin/plans/listar-planes",
          label: "Listar Planes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/plans/crear-plan",
          label: "Crear Plan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/plans/ver-detalles-de-plan",
          label: "Ver detalles de Plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/plans/actualizar-plan",
          label: "Actualizar Plan",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/admin/plans/eliminar-plan",
          label: "Eliminar Plan",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
