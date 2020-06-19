module.exports = {
  siteMetadata: {
    title: `Cash Rules Everything Around Me`,
    description: `An app to manage my personal finances.`,
    author: `@davidleger95`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cash-rules-everthing-around-me`,
        short_name: `cream`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-extract-schema`,
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: { files: ['**/*.{ts,tsx,css}'], fix: true },
    },
    `@bumped-inc/gatsby-plugin-optional-chaining`,
  ],
};
