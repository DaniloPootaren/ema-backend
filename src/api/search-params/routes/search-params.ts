export default {
  routes: [
    {
     method: 'GET',
     path: '/search-params',
     handler: 'search-params.getSearchParams',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
