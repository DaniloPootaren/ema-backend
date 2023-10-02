
export default {
  routes: [
    {
      method: "GET",
      path: "/userProfile",
      handler: "custom-profile.getUserProfile",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
