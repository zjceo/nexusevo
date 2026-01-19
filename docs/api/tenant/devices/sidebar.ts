import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tenant/devices/nexusevo-tenant-api-devices",
    },
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
  ],
};

export default sidebar.apisidebar;
