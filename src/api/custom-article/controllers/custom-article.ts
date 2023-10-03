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
  findArticleById: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).findArticleById(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
  getTagsByCategory: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).getTagsByCategory(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
  findArticlesByTag: async (ctx) => {
    try {
      return await ((strapi as Strapi).service(SLUG) as any).findArticlesByTag(ctx);
    } catch (err) {
      throw new Error(err);
    }
  },
};
