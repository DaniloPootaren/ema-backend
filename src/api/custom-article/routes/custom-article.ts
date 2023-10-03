export default {
  routes: [
    {
     method: 'GET',
     path: '/featured-articles',
     handler: 'custom-article.getFeaturedArticles',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/find-article/:id',
      handler: 'custom-article.findArticleById',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
