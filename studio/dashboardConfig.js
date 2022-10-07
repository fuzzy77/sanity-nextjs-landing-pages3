export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '633ff33725a0fc2a9a3169f0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-3-studio-zsec2vk5',
                  apiId: '32b377f9-1dba-49c9-804b-c9c32b931357'
                },
                {
                  buildHookId: '633ff3370f3b852c8b0ca04d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-3-web-s38d1qtd',
                  apiId: '7c24844c-b85f-48ee-8d1b-ca12dd0850a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fuzzy77/sanity-nextjs-landing-pages3',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-3-web-s38d1qtd.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
