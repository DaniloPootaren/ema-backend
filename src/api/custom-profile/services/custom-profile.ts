const utils = require("@strapi/utils");

export default () => ({
  getUserProfile: async (ctx) => {
    if (ctx.state?.user?.id) {
      const currentProfile = await strapi.db
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            id: ctx.state.user.id,
          },
          populate: ["profile"],
        });

      delete currentProfile.password;
      delete currentProfile.resetPasswordToken;
      delete currentProfile.confirmationToken;

      return currentProfile;
    }
  }
});
