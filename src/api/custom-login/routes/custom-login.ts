export default {
  routes: [
    {
     method: 'POST',
     path: '/google-login',
     handler: 'custom-login.googleLogin',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/facebook-login',
      handler: 'custom-login.facebookLogin',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
