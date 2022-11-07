import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { PageLayout } from "../components/layout/layout";
import { RecipesList } from "../components/recipes-list/recipes-list";

export const query = graphql`
  query TypegenRecipeTagDetail($tag: String!) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            cornerRadius: 10
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;

const TagTemplate = (
  props: PageProps<Queries.TypegenRecipeTagDetailQuery, { tag: string }>
) => {
  return (
    <PageLayout>
      <h1>Tagged with: {props.pageContext.tag}</h1>
      <RecipesList
        recipes={props.data.allContentfulRecipe.nodes as unknown as any}
      />
    </PageLayout>
  );
};

export default TagTemplate;

export const Head: HeadFC<
  Queries.TypegenRecipeTagDetailQuery,
  { tag: string }
> = (props) => {
  return (
    <>
      <title>{props.pageContext.tag}</title>
      <meta name="description" content="List of recipes with tag" />
    </>
  );
};
