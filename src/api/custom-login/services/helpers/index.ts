import { Profile, Role, RoleEnum, User } from "../../../../models";

export const getRoleEntity = async (): Promise<Role> => {
  const roles = await strapi.entityService.findMany(
    "plugin::users-permissions.role"
  );

  return roles.find((role) => role.name === RoleEnum.Authenticated);
};

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const [user] = await strapi.entityService.findMany(
      "plugin::users-permissions.user",
      {
        populate: ["profile", "role"],
        filters: {
          email,
        },
      }
    );
    return user;
  } catch (e) {
    throw e;
  }
};

export const issueToken = (user: any) => {
  return strapi.plugins["users-permissions"].services.jwt.issue({
    id: user.id,
    role: user.role.name,
  });
};

export const createNewUser = async (
  email: string,
  profile: Profile
): Promise<{
  user: User;
  profile: Profile;
}> => {
  const { accepted_terms_and_conditions, birthdate, phone } = profile;
  try {
    const newUser = await strapi.db
      .query("plugin::users-permissions.user")
      .create({
        populate: ["role"],
        data: {
          username: email,
          email,
          provider: "PROVIDER",
          confirmed: true,
          role: (await getRoleEntity()).id,
        },
      });

    const profile = await strapi.db.query("api::profile.profile").create({
      populate: [],
      data: {
        users_permissions_user: newUser.id,
        accepted_terms_and_conditions,
        birthdate,
        phone,
      },
    });

    return { user: newUser, profile };
  } catch (e) {
    throw e;
  }
};
