import {Strapi} from '@strapi/strapi';

export const insertApiToken = async () => {
  const response = await (strapi as Strapi).db.connection.raw(
    'SELECT * from strapi_api_tokens where name="Mobile App"',
  );

  if (!response[0][0]) {
    await strapi.db.connection.raw(
      'Insert into strapi_api_tokens(description, name, type, access_key)' +
        "VALUES ('', 'Mobile App', 'full-access', '078b31eb69a2fc901fe7e3e0957b1bb7868960d91dbaf31584e817994c9a232f1441fdc9f8843009d696affef97fe3f5f0cc7ee1d5182bfe0fe5f2cba25fd714') ",
    );
    console.log('Mobile API Token data inserted successfully');
  }
};
