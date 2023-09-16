import { Strapi } from "@strapi/strapi";
import { FacebookUserProfile, GoogleUserProfile } from "../../../models";
import { createNewUser, getUserByEmail, issueToken } from "./helpers";

const SLUG = "api::article.article";

export default () => ({
  googleLogin: async (ctx) => {
    const { email } = ctx.request.body as GoogleUserProfile;
    const user = await getUserByEmail(email);

    if (user?.confirmed && !user?.blocked) {
      return { access_token: await issueToken(user) };
    } else {
      const { user } = await createNewUser(email, {
        accepted_terms_and_conditions: true,
        birthdate: null,
        phone: null,
      });
      return { access_token: await issueToken(user.email) };
    }
  },

  facebookLogin: async (ctx) => {
    const { email } = ctx.request.body as FacebookUserProfile;
    const user = await getUserByEmail(email);

    if (user?.confirmed && !user?.blocked) {
      return { access_token: await issueToken(user) };
    } else {
      const { user } = await createNewUser(email, {
        accepted_terms_and_conditions: true,
        birthdate: null,
        phone: null,
      });
      return { access_token: await issueToken(user.email) };
    }
  },
});
