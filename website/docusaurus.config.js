// Docs at https://v2.docusaurus.io/docs/configuration

// Replace 'project-blueprint' with {project name}
const projectName = 'Git Proxy';
// Replace 'project-blueprint' with {project name}
const projectSlug = 'git-proxy';
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS';
const year = new Date().getFullYear();

module.exports = {
  title: `${projectName}`,
  tagline: `Enforce push protections and auditability for Git repositories`,
  url: 'https://finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Overpass:400,400i,700',
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: `${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        { to: 'docs/home', label: 'Docs', position: 'right' },
        { to: 'docs/roadmap', label: 'Roadmap', position: 'right' },
        { to: 'docs/team', label: 'Team', position: 'right' },
        {
          href: 'https://github.com/finos/git-proxy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${year} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/home',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap',
            },
            {
              label: 'Team',
              to: 'docs/team',
            },
          ],
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://www.finos.org/',
            },
            {
              label: 'Community Handbook',
              to: 'https://community.finos.org/',
            },
            {
              label: 'Community Governance',
              to: 'https://community.finos.org/docs/governance/#community-governance',
            },
          ],
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl: 'https://github.com/finos/git-proxy/edit/master/website/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
