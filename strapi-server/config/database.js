    // // strapi-api/config/database.js
    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'postgres',
    //     connection: {
    //       host: env('DATABASE_HOST'),
    //       port: env.int('DATABASE_PORT'),
    //       database: env('DATABASE_NAME'),
    //       user: env('DATABASE_USERNAME'),
    //       password: env('DATABASE_PASSWORD'),
    //       ssl: {
    //         rejectUnauthorized: false,
    //       }
    //     }
    //   },
    // });

  export default ({ env }) => ({
  client: "postgres",
  connection: {
    host: env("DATABASE_HOST"),
    port: env.int("DATABASE_PORT", 5432),
    database: env("DATABASE_NAME"),
    user: env("DATABASE_USERNAME"),
    password: env("DATABASE_PASSWORD"),
    ssl: { rejectUnauthorized: false },
  },
  useNullAsDefault: true,
});
