import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/admin/auth/nexusevo-system-api-auth",
    },
    {
      type: "category",
      label: "System Auth",
      items: [
        {
          type: "doc",
          id: "api/admin/auth/login-de-sistema",
          label: "Login de Sistema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/auth/logout-de-sistema",
          label: "Logout de Sistema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/admin/auth/perfil-de-administrador",
          label: "Perfil de Administrador",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
