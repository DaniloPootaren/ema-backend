const utils = require("@strapi/utils");

export default () => ({
  getSearchParams: async (ctx) => {
    const tags = await strapi.db.query("api::tag.tag").findMany({});
    return { tags, categories: ['Body', 'Health', 'Product'] };
  },
});
