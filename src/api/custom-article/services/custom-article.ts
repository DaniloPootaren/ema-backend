import { paginate } from "../../../utils/pagination";

const SLUG = "api::article.article";

export default () => ({
  getFeaturedArticles: async (ctx) => {
    const type = ctx.query?.type;
    const pageNumber = ctx.query?.pageNumber;
    const pageSize = ctx.query?.pageSize;
    const featured = ctx.query?.featured;


    const articles = await strapi.db.query(SLUG).findMany({
      populate: ["image", "tags"],
      where: {
        type,
        featured,
        publishedAt: {
          $ne: null,
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return paginate(articles, pageNumber, pageSize);

  },

  findArticleById: async (ctx) => {
    const id = ctx.params.id;
    
    const article = await strapi.db.query(SLUG).findOne({
      populate: ["image", "tags"],
      where: {
        id,
        publishedAt: {
          $ne: null,
        },
      }
    });

    return article;

  },
});
