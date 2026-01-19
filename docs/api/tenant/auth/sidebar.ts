import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tenant/auth/nexusevo-tenant-api-auth",
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
  ],
};

export default sidebar.apisidebar;
