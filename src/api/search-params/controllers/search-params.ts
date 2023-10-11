import {Strapi} from '@strapi/strapi';

const SLUG = 'api::search-params.search-params';


export default {
  getSearchParams: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).getSearchParams(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
};
