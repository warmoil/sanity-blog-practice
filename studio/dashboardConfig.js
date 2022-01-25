export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61ef886982756483d26eb8ea',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-practice-studio',
                  apiId: '77a7e4e2-acf4-4241-8cd6-320a124c26de'
                },
                {
                  buildHookId: '61ef886aea34bf87348d262a',
                  title: 'Blog Website',
                  name: 'sanity-blog-practice',
                  apiId: 'a04e2084-3dd8-4020-a1dd-cc93e321ed9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/warmoil/sanity-blog-practice',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-blog-practice.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
