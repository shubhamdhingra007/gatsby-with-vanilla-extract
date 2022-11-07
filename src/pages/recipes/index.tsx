import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { PageLayout } from "../../components/layout/layout";
import { RecipesList } from "../../components/recipes-list/recipes-list";

export const query = graphql`
  query TypegenAllRecipes {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const GalleryPage = (props: PageProps<Queries.TypegenAllRecipesQuery>) => {
  return (
    <PageLayout>
      <h1>All recipes</h1>
      <RecipesList
        recipes={props.data.allContentfulRecipe.nodes as unknown as any}
      />
    </PageLayout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Recipes page</title>
      <meta name="description" content="View our recipes" />
    </>
  );
};
