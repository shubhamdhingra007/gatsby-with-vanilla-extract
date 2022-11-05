import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { PageLayout } from "../components/layout/layout";

export const query = graphql`
  query TypegenGallery {
    allFile(filter: { extension: { in: ["jpg", "jpeg", "png"] } }) {
      totalCount
      nodes {
        name
        extension
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            layout: FIXED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const GalleryPage = (props: PageProps<Queries.TypegenGalleryQuery>) => {
  console.log("props >>>", props);
  const imgNodes = props.data.allFile.nodes;
  return (
    <PageLayout>
      <h1>Simple Image Gallery</h1>
      <section style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {imgNodes.map((u, i) => {
          return (
            <article key={i}>
              <GatsbyImage
                image={u.childImageSharp?.gatsbyImageData}
                alt={u.name}
              />
              <p>{u.name}</p>
            </article>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Gallery page</title>
      <meta name="description" content="View our gallery" />
    </>
  );
};
