/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Peach Bellini - Looking for 🍑?`,
    description: `Easy peezy peachy squeezy`,
    twitterUsername: `@peachbellini`, //TODO
    siteUrl: `https://peachbellini.ca`, //TODO
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8dmgiip8neyx`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
