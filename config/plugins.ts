module.exports = ({ env }) => {
  const jwtSecret = env("JWT_SECRET", "default_secret");

  return {
    email: {
      config: {
        provider: "strapi-provider-email-brevo",
        providerOptions: {
          apiKey: env("BREVO_API"),
        },
        settings: {
          defaultFrom: "no-reply@mobileappema@gmail.com",
          defaultSenderEmail: "mobileappema@gmail.com",
          defaultSenderName: "mobileappema@gmail.com",
          defaultReplyTo: "mobileappema@gmail.com",
        },
      },
    },
    plugins: {
      "users-permissions": {
        jwt: {
          secret: jwtSecret,
          expiresIn: "1d",
        },
      },
      name: "strapi::security",
      config: {
        contentSecurityPolicy: {
          directives: {
            "img-src": ["*"],
          },
        },
      },
    },
  };
};
