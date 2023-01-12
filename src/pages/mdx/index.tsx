import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { PageLayout } from "../../components/layout/layout";
import { Posts } from "../../components/posts/posts.component";

export const query = graphql`
  query TypegenAllMdxs {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { slug: { regex: "/.+/" } } }
    ) {
      nodes {
        frontmatter {
          author
          title
          readTime
          date(formatString: "MMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
        }
        excerpt
        id
      }
      totalCount
    }
  }
`;

const Page = (props: PageProps<Queries.TypegenAllMdxsQuery>) => {
  const allMdx = props.data.allMdx.nodes;
  return (
    <PageLayout>
      <Posts posts={allMdx as unknown as any} title={"All MDXs"} />
    </PageLayout>
  );
};

export default Page;

export const Head: HeadFC = () => {
  return (
    <>
      <title>MDXs page</title>
      <meta name="description" content="View all MDX categories" />
    </>
  );
};
