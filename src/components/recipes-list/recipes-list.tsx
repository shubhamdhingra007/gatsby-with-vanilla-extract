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
} from "./recipes-list.css";

type Recipe = {
  title: string | null;
  id: string;
  prepTime: number | null;
  cookTime: number | null;
  content: {
    tags: Array<string | null> | null;
  } | null;
  image: {
    gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData | null;
  } | null;
};

export const RecipesList: React.FC<{
  recipes: Recipe[];
}> = ({ recipes = [] }) => {
  if (!recipes.length) {
    return null;
  }
  return (
    <div className={container}>
      {recipes.map((u) => (
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
