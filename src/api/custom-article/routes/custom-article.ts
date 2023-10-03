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
  ],
};
