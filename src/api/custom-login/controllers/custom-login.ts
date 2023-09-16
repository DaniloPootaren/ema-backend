import {Strapi} from '@strapi/strapi';


const SLUG = 'api::custom-login.custom-login';


export default {
  googleLogin: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).googleLogin(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
  facebookLogin: async (ctx, next) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).facebookLogin(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
};
