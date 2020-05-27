const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')

require('dotenv').config();

module.exports = withSass(withCSS({
  publicRuntimeConfig: {
    api: process.env.API_URL
  },
}));