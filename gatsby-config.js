module.exports = {
  siteMetadata: {
    title: `Gatsbase Starter`,
    description: `Kick off great Gatsby project`,
    author: `jason@lungvang.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-styled-components",
      option: {}
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsbase`,
        short_name: `Gatsbase`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/lungvang-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    }
  ]
};
