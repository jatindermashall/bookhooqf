module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "strapi-mongoose",
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST", "ds017886.mlab.com:17886"),
        port: env.int("DATABASE_PORT", "17886"),
        database: env("DATABASE_NAME", "bookhooq"),
        username: env("DATABASE_USERNAME", "bookhooq"),
        password: env("DATABASE_PASSWORD", "test123"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
