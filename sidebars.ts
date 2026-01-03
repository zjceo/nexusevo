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
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "NexusEvo API",
        description: "Documentación técnica de los endpoints de mensajería.",
        slug: "/api"
      },
      items: require("./docs/api/sidebar.ts")
    },
  ],
};

export default sidebars;
