const withTM = require("next-transpile-modules")(["@graphql-client-di/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
