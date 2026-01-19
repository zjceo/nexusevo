import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NexusEvo',
  tagline: 'Gestión de comunicaciones masivas',
  favicon: 'img/nexusevo-favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://nexus.zjceo.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zjceo', // Usually your GitHub org/user name.
  projectName: 'nexusevo', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zjceo/nexusevo/tree/main/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          admin: {
            specPath: "static/system-api.json",
            outputDir: "docs/api/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          "tenant-auth": {
            specPath: "static/tenant-auth.json",
            outputDir: "docs/api/tenant/auth",
            baseUrl: "/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          "tenant-devices": {
            specPath: "static/tenant-devices.json",
            outputDir: "docs/api/tenant/devices",
            baseUrl: "/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          "tenant-send-message": {
            specPath: "static/tenant-send-message.json",
            outputDir: "docs/api/tenant/send-message",
            baseUrl: "/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          "tenant-campaigns": {
            specPath: "static/tenant-campaigns.json",
            outputDir: "docs/api/tenant/campaigns",
            baseUrl: "/api/tenant",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          }
        }
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/nexusevo-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NexusEvo',
      logo: {
        alt: 'NexusEvo Logo',
        src: 'img/nexusevo-logo.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        }*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },*/
        /*{
          title: 'Community',
          items: [            
          ],
        },*/
        /*{
          title: 'More',
          items: [  

          ],
        },*/
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
