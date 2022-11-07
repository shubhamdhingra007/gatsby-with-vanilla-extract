import { graphql, HeadFC, PageProps } from "gatsby";
import "normalize.css";
import * as React from "react";
import { PageLayout } from "../components/layout/layout";
import { useSiteMeta } from "../hooks/use-site-meta";
import { list, listItem } from "../styles/index.css";

type queryDataType = {
  allPerson: {
    nodes: {
      name: string;
      first_name: string;
      last_name: string;
    }[];
  };
};

const IndexPage = (props: PageProps<queryDataType>) => {
  return (
    <PageLayout>
      <h1>hello world</h1>
      <ul className={list}>
        {props.data.allPerson.nodes.map((node) => (
          <li className={listItem} key={node.name}>
            {node.name}
          </li>
        ))}
      </ul>
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { site } = useSiteMeta();
  return (
    <>
      <title>{site?.siteMetadata?.title}</title>
      <meta
        name="description"
        content={site?.siteMetadata?.description || ""}
      />
      <meta name="keywords" content={site?.siteMetadata?.keywords?.join(",")} />
    </>
  );
};

export const query = graphql`
  {
    allPerson {
      nodes {
        name
        first_name
        last_name
      }
    }
  }
`;
