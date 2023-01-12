import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { container, postImage } from "./post.css";

export const Post: FC<{ post: any }> = ({ post }) => {
  const { title, image, slug, date, readTime, category } = post.frontmatter;
  console.log("image >>', ", image);
  return (
    <Link to={`/mdx/${slug}`} className={container}>
      {!!image && (
        <GatsbyImage
          image={image?.childImageSharp?.gatsbyImageData}
          alt={title}
          className={postImage}
        />
      )}
      <div>
        <h3>{title}</h3>
        <p>{post.excerpt}</p>
        <p>Published: {date}</p>
        <hr />
        <p>{readTime} mins read time</p>
      </div>
    </Link>
  );
};
