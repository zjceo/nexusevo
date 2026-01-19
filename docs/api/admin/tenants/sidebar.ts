import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/admin/tenants/nexusevo-system-api-tenants",
    },
    {
      type: "category",
      label: "System Tenants",
      items: [
        {
          type: "doc",
          id: "api/admin/tenants/listar-tenants",
          label: "Listar Tenants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/tenants/crear-tenant",
          label: "Crear Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/tenants/ver-detalles-de-tenant",
          label: "Ver detalles de Tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/tenants/actualizar-tenant",
          label: "Actualizar Tenant",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/admin/tenants/eliminar-tenant",
          label: "Eliminar Tenant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/admin/tenants/bloquear-tenant",
          label: "Bloquear Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/tenants/desbloquear-tenant",
          label: "Desbloquear Tenant",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
