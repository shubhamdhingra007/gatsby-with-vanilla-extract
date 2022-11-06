import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import slugify from "slugify";
import {
  card,
  cardContent,
  cardImg,
  cardLink,
  cardMeta,
  container,
} from "./all-recipes.css";

export const AllRecipes: React.FC<{
  recipes: Queries.TypegenAllRecipesQuery;
}> = ({ recipes }) => {
  return (
    <div className={container}>
      {recipes.allContentfulRecipe.nodes.map((u) => (
        <div key={u.id} className={card}>
          {!!u.image?.gatsbyImageData && (
            <GatsbyImage
              alt={u.title || ""}
              image={u.image?.gatsbyImageData}
              className={cardImg}
            />
          )}
          <div className={cardContent}>
            <h3>
              <Link
                className={cardLink}
                to={`/recipes/${slugify(u.title || "", { lower: true })}`}
              >
                {u.title}
              </Link>
            </h3>
            <div className={cardMeta}>
              Prep: {u.prepTime}min | Cook: {u.cookTime}min
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
