import { graphql, HeadFC, Link, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs";
import { PageLayout } from "../../components/layout/layout";
import {
  hero,
  ingredient,
  instruction,
  instructionHeader,
  instructionStepHeading,
  line,
  meta,
  metaContainer,
  metaIcon,
  metaTitle,
  metaValue,
  recipe,
  tagItem,
} from "../../styles/recipe.css";

const RecipeTemplate = (props: PageProps<Queries.TypegenRecipeDetailQuery>) => {
  const imageData = props.data.contentfulRecipe?.image?.gatsbyImageData;
  const tags = props.data.contentfulRecipe?.content?.tags || [];
  return (
    <PageLayout>
      <section className={hero}>
        {!!imageData && (
          <GatsbyImage
            image={imageData}
            alt={props.data.contentfulRecipe?.title || ""}
          />
        )}
        <section>
          <h1>{props.data.contentfulRecipe?.title}</h1>
          <p>{props.data.contentfulRecipe?.description?.description}</p>
          <div className={metaContainer}>
            <div className={meta}>
              <BsClock className={metaIcon} />
              <h3 className={metaTitle}>Prep time</h3>
              <div className={metaValue}>
                {props.data.contentfulRecipe?.prepTime} min
              </div>
            </div>
            <div className={meta}>
              <BsClockHistory className={metaIcon} />
              <h3 className={metaTitle}>Cook time</h3>
              <div className={metaValue}>
                {props.data.contentfulRecipe?.cookTime} min
              </div>
            </div>
            <div className={meta}>
              <BsPeople className={metaIcon} />
              <h3 className={metaTitle}>Serving</h3>
              <div className={metaValue}>
                {props.data.contentfulRecipe?.servings}
              </div>
            </div>
          </div>
          {!!tags.length && (
            <>
              Tags:{" "}
              {tags.map((tag) => (
                <Link to={`/recipes/tags/${tag}`} key={tag} className={tagItem}>
                  {tag}
                </Link>
              ))}
            </>
          )}
        </section>
      </section>
      <section className={recipe}>
        <section>
          <h2>Instructions</h2>
          {props.data.contentfulRecipe?.content?.instructions?.map((u, i) => (
            <div key={i} className={instruction}>
              <header className={instructionHeader}>
                <h3 className={instructionStepHeading}>Step {i + 1}</h3>
                <div className={line}></div>
              </header>
              <p>{u}</p>
            </div>
          ))}
        </section>
        <section>
          <section>
            <h2>Ingredients</h2>
            {props.data.contentfulRecipe?.content?.ingredients?.map((u, i) => (
              <div key={i} className={ingredient}>
                {u}
              </div>
            ))}
          </section>
          <section>
            <h2>Tools</h2>
            {props.data.contentfulRecipe?.content?.tools?.map((u, i) => (
              <div key={i} className={ingredient}>
                {u}
              </div>
            ))}
          </section>
        </section>
      </section>
    </PageLayout>
  );
};

export default RecipeTemplate;

export const Head: HeadFC<Queries.TypegenRecipeDetailQuery> = (props) => {
  return (
    <>
      <title>{props.data.contentfulRecipe?.title} | Recipe</title>
      <meta name="description" content="View our recipes" />
    </>
  );
};

export const query = graphql`
  query TypegenRecipeDetail($title: String!) {
    contentfulRecipe(title: { eq: $title }) {
      title
      prepTime
      cookTime
      description {
        description
      }
      servings
      content {
        tags
        tools
        ingredients
        instructions
      }
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          width: 600
        )
      }
    }
  }
`;
