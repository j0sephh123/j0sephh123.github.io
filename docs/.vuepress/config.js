module.exports = {
  title: 'Joseph Documentation',
  description: 'Just playing around with Vuepress',
  base: "https://j0sephh123.github.io/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vuepress docs', link: 'https://vuepress.vuejs.org/guide/' },
    ],
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: [
      {
        title: "sidebar",
        path: "/sidebar/",
        collapsible: true,
        sidebarDepth: 2,
      },
    ]
  },
}