const path = require('path');

module.exports = {
  siteMetadata: {
    title: `My portfolio`,
    description: `Showcase of developing static site`,
    author: `@oevadee`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Lato', 'Noto Sans Japanese/:300,400,500,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};
