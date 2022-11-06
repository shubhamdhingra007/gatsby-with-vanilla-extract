import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: "This is my site",
    keywords: ["dummy", "vanilla-extract"],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "7hovzrkwiub7",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
