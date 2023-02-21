/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    homeSidebar: [
        'home',
        {
            type: 'category',
            label: '👋 Introduction',
            link: {
              type: 'doc',
              id: 'introduction/intro'
            },
            collapsed: true,
            items: [
                "introduction/concepts",
                "introduction/models",
                "introduction/prompts",
                "introduction/outputs",
                "introduction/tokens",
            ],
          },
        {
            type: 'category',
            label: '🔎 User guides',
            link: {
                type: 'doc',
                id: 'guides/guides'
            },
            collapsed: true,
            items: [
                'guides/prompt',
                'guides/parameters',
            ]
        },
        {
            type: 'category',
            label: '📟 Developer documentation',
            link: {
              type: 'doc',
              id: 'api/using'
            },
            collapsed: true,
            items: [
                {
                    '🧐 Specifications': [
                        'api/specifications/authentication',
                        'api/specifications/requests',
                        'api/specifications/responses',
                        'api/specifications/errors_warnings',
                    ],
                },
                {
                    '🧠 Endpoints': [
                        'api/endpoints/create',
                        'api/endpoints/analyse',
                        'api/endpoints/select',
                        'api/endpoints/tokenize',
                    ],
                },
            ],
          },
        ],
};
