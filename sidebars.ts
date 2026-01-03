import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import adminSidebar from "./docs/api/admin/sidebar";
import tenantSidebar from "./docs/api/tenant/sidebar";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Administración',
      items: ['admin/tenants'],
    },
    {
      type: 'category',
      label: 'Funcionalidades Tenant',
      items: ['tenant/whatsapp', 'tenant/campaigns'],
    },
    {
      type: "category",
      label: "Admin API",
      link: {
        type: "doc",
        id: "api/admin/nexusevo-system-api",
      },
      items: adminSidebar,
    },
    {
      type: "category",
      label: "Tenant API",
      link: {
        type: "doc",
        id: "api/tenant/nexusevo-tenant-api",
      },
      items: tenantSidebar,
    },
  ],
};

export default sidebars;
