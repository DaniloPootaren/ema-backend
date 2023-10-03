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
      },
    });

    const relatedArticles = await strapi.db.query(SLUG).findMany({
      populate: ["image", "tags"],
      where: {
        id: {
          $ne: article.id,
        },
        type: article.type,
        publishedAt: {
          $ne: null,
        },
        tags: {
          id: {
            $in: article.tags.map((obj) => obj.id),
          },
        },
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return { article, relatedArticles };
  },

  getTagsByCategory: async (ctx) => {
    const type = ctx.query?.type;

    const articles = await strapi.db.query(SLUG).findMany({
      populate: ["tags"],
      where: {
        type,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const arrayOfArrays = articles.map((obj) => obj.tags);

    const uniqueObjectsSet = new Set();

    const uniqueArray = [];

    arrayOfArrays.forEach((innerArray) => {
      innerArray.forEach((obj) => {
        const objString = JSON.stringify(obj);

        if (!uniqueObjectsSet.has(objString)) {
          uniqueObjectsSet.add(objString);
          uniqueArray.push(obj);
        }
      });
    });

    return uniqueArray;
  },

  findArticlesByTag: async (ctx) => {
    const type = ctx.query?.type;
    const tagId = ctx.query?.tagId;
    const pageNumber = ctx.query?.pageNumber;
    const pageSize = ctx.query?.pageSize;

    const articles = await strapi.db.query(SLUG).findMany({
      populate: ["image", "tags"],
      where: {
        type,
        publishedAt: {
          $ne: null,
        },
        tags: {
          id : {
            $in	: [tagId]
          }
        }
      },
      orderBy: {
        publishedAt: "desc",
      },
    });

    return paginate(articles, pageNumber, pageSize);
  },
});
