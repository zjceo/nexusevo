import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/admin/nexusevo-system-api",
    },
    {
      type: "category",
      label: "System Auth",
      items: [
        {
          type: "doc",
          id: "api/admin/login-de-sistema",
          label: "Login de Sistema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/logout-de-sistema",
          label: "Logout de Sistema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/perfil-de-administrador",
          label: "Perfil de Administrador",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "System Tenants",
      items: [
        {
          type: "doc",
          id: "api/admin/listar-tenants",
          label: "Listar Tenants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/crear-tenant",
          label: "Crear Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/ver-detalles-de-tenant",
          label: "Ver detalles de Tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/actualizar-tenant",
          label: "Actualizar Tenant",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/admin/eliminar-tenant",
          label: "Eliminar Tenant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/admin/bloquear-tenant",
          label: "Bloquear Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/desbloquear-tenant",
          label: "Desbloquear Tenant",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "System Plans",
      items: [
        {
          type: "doc",
          id: "api/admin/listar-planes",
          label: "Listar Planes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/crear-plan",
          label: "Crear Plan",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/ver-detalles-de-plan",
          label: "Ver detalles de Plan",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/admin/actualizar-plan",
          label: "Actualizar Plan",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/admin/eliminar-plan",
          label: "Eliminar Plan",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
