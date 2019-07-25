export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d39e57491950dd88b230c45',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oe28kkqd',
                  apiId: 'c1123c94-9113-4962-8565-b08c67e1033e'
                },
                {
                  buildHookId: '5d39e57591950d4d2e230c98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-akn6mq9m',
                  apiId: '0c1ab03a-4c22-4e41-8c58-000e7a355560'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dudulxyz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-akn6mq9m.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
