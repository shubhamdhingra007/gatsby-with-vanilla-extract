import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { PageLayout } from "../components/layout/layout";
import { useSiteMeta } from "../hooks/use-site-meta";

const IndexPage = (
  props: PageProps<any, any, any, { message: string; status: string }[]>
) => {
  console.log("props?.serverData>>", props?.serverData);
  return (
    <PageLayout>
      <h1>SSR Page with Dogs</h1>
      {props?.serverData?.map((u, i) => (
        <img
          key={i}
          style={{ width: 400, height: 400, objectFit: "cover", margin: 20 }}
          alt="Happy dog"
          src={u.message}
        />
      ))}
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { site } = useSiteMeta();
  return (
    <>
      <title>SSR Page with Dogs</title>
      <meta
        name="description"
        content={site?.siteMetadata?.description ?? ""}
      />
      <meta name="keywords" content={site?.siteMetadata?.keywords?.join(",")} />
    </>
  );
};

export async function getServerData() {
  try {
    const requests = Array(15)
      .fill("https://dog.ceo/api/breeds/image/random")
      .map((u) => fetch(u));
    const res2 = await Promise.all(requests);

    return {
      props: await Promise.all(res2.map((u) => u.json())),
    };
  } catch (error) {
    console.log("error creating pages >>>>>", error);
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
