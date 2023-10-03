import { Strapi } from "@strapi/strapi";

const SLUG = "api::custom-article.custom-article";

export default {
  getFeaturedArticles: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).getFeaturedArticles(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
};
