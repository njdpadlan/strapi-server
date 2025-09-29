export default ({ env }) => ({
  client: 'postgres',
  connection: {
    host: env('DATABASE_HOST', "dpg-d3b2rgd6ubrc739dea60-a.oregon-postgres.render.com"),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', "strapi_server_db_nyom"),
    user: env('DATABASE_USERNAME', "admin"),
    password: env('DATABASE_PASSWORD', "C3n50kZjVvSeAUDiiXnNB4JocMCZq64E"),
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
