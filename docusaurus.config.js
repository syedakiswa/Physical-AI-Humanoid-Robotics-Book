// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Physicall AI',
    tagline: 'Humaniad AI Solutions  by Sayeda Kiswa',
    favicon: 'img/logo1.png',

    future: {
        v4: true,
    },

    url: 'https://physicall-ai.example.com',
    baseUrl: '/',

    organizationName: 'syedakiswa',
    projectName: 'physicall-ai',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/syedakiswa/physicall-ai/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/syedakiswa/physicall-ai/tree/main/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig: {
        image: 'img/physicall-ai-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Rise of Physical AI & Humanoid Robotics',
            logo: {
                alt: 'Physicall AI Logo',
                src: 'img/logo1.png',
            },
            items: [
                { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },

                { href: 'https://github.com/syedakiswa', label: 'GitHub', position: 'right' },


            ],
        },




        // footer: {
        //     style: 'dark',
        //     links: [{
        //             title: 'Docs',
        //             items: [{
        //                 label: 'Tutorial',
        //                 to: '/docs/intro',
        //             }, ],
        //         },
        //         {
        //             title: 'Community',
        //             items: [{
        //                     label: 'Stack Overflow',
        //                     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //                 },
        //                 {
        //                     label: 'Discord',
        //                     href: 'https://discordapp.com/invite/docusaurus',
        //                 },
        //                 {
        //                     label: 'X',
        //                     href: 'https://x.com/docusaurus',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'More',
        //             items: [{
        //                     label: 'Blog',
        //                     to: '/blog',
        //                 },
        //                 {
        //                     label: 'GitHub',
        //                     href: 'https://github.com/syedakiswa',
        //                 },
        //             ],
        //         },
        //     ],
        //     copyright: `Copyright © ${new Date().getFullYear()} Physicall AI.the book developed by Sayeda Kiswa.`,
        // },
        scripts: [
            'https://cdn.better-auth.com/sdk.js', // Better Auth JS
            '/js/auth.js', // Humari custom auth script
        ],

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

export default config;