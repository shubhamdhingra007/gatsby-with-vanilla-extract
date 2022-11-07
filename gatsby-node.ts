import type { GatsbyNode } from "gatsby";

import path from "path";
import slugify from "slugify";
// const path = require("path");

type Person = {
  first_name: string;
  last_name: string;
  name?: string;
};

const persons: Person[] = [
  {
    first_name: "Ada",
    last_name: "Lovelace",
  },
  {
    first_name: "Grace",
    last_name: "Hopper",
  },
  {
    first_name: "Hedy",
    last_name: "Lamarr",
  },
  {
    first_name: "Annie",
    last_name: "Easley",
  },
];

export const sourceNodes: GatsbyNode["sourceNodes"] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  persons.forEach((person) => {
    createNode({
      ...person,
      name: `${person.first_name} ${person.last_name}`,
      id: createNodeId(`Person-${person.first_name}-${person.last_name}`),
      internal: {
        type: `Person`,
        contentDigest: createContentDigest(person),
      },
    });
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql(`
    query TypegenTag {
      allContentfulRecipe(sort: { fields: title, order: ASC }) {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  (result.data as unknown as any).allContentfulRecipe.nodes.forEach(
    (recipe: any) => {
      recipe.content.tags.forEach((tag: string) => {
        createPage({
          path: `/recipes/tags/${slugify(tag, { lower: true })}`,
          component: path.resolve("src/templates/tag-template.tsx"),
          context: {
            tag,
          },
        });
      });
    }
  );
};
