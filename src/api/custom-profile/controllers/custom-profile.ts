import {Strapi} from '@strapi/strapi';

const SLUG = 'api::custom-profile.custom-profile';


export default {
  getUserProfile: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).getUserProfile(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
};
