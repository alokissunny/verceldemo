const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['@fluentui/react']);

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
module.exports = withPlugins([ withTM({
  env : {
    LINKEDIN_STATE: process.env.LINKEDIN_STATE,
    LINKEDIN_SCOPE: process.env.LINKEDIN_SCOPE,
    LINKEDIN_CLIENT_ID: process.env.LINKEDIN_CLIENT_ID,
    LINKEDIN_REDIRECT: process.env.LINKEDIN_REDIRECT,
    LINKEDIN_REDIRECT_CONNECT: process.env.LINKEDIN_REDIRECT_CONNECT,
    LINKEDIN_CLIENT_SECRET: process.env.LINKEDIN_CLIENT_SECRET,
  },
  webpack5: false, // you want to keep using Webpack 4
}) , optimizedImages], nextConfiguration);
